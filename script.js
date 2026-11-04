// IPL 2026 Ticket Booking - simple front-end booking logic.
// Bookings are kept in the browser (localStorage); there is no server.

(function () {
  "use strict";

  var STORAGE_KEY = "ipl2026-bookings";

  var scheduleBody = document.getElementById("schedule-body");
  var teamFilter = document.getElementById("team-filter");
  var form = document.getElementById("booking-form");
  var matchSelect = document.getElementById("match");
  var standSelect = document.getElementById("stand");
  var ticketsInput = document.getElementById("tickets");
  var bookingsBody = document.getElementById("bookings-body");

  var sumMatch = document.getElementById("sum-match");
  var sumStand = document.getElementById("sum-stand");
  var sumPrice = document.getElementById("sum-price");
  var sumQty = document.getElementById("sum-qty");
  var sumTotal = document.getElementById("sum-total");

  // ---- Read the schedule from the table so HTML stays the single source of truth ----
  function getMatches() {
    var rows = scheduleBody.querySelectorAll("tr[data-match]");
    return Array.prototype.map.call(rows, function (row) {
      return {
        id: row.dataset.match,
        label: row.cells[1].textContent.trim() + " (" + row.cells[2].textContent.trim() + ")",
        teams: row.dataset.teams,
        prices: {
          general: Number(row.dataset.general),
          premium: Number(row.dataset.premium),
          vip: Number(row.dataset.vip)
        },
        row: row
      };
    });
  }

  var matches = getMatches();

  function findMatch(id) {
    for (var i = 0; i < matches.length; i++) {
      if (matches[i].id === id) return matches[i];
    }
    return null;
  }

  function standLabel(stand) {
    return stand.charAt(0).toUpperCase() + stand.slice(1);
  }

  function rupees(n) {
    return "₹" + Number(n).toLocaleString("en-IN");
  }

  // ---- Populate match dropdown ----
  matches.forEach(function (m) {
    var opt = document.createElement("option");
    opt.value = m.id;
    opt.textContent = m.label;
    matchSelect.appendChild(opt);
  });

  // ---- Team filter ----
  teamFilter.addEventListener("change", function () {
    var team = teamFilter.value;
    matches.forEach(function (m) {
      var show = team === "all" || m.teams.split(" ").indexOf(team) !== -1;
      m.row.hidden = !show;
    });
  });

  // ---- "Book" buttons in the schedule jump to the form with the match preselected ----
  scheduleBody.addEventListener("click", function (e) {
    var btn = e.target.closest(".book-btn");
    if (!btn) return;
    matchSelect.value = btn.closest("tr").dataset.match;
    updateSummary();
    document.getElementById("book").scrollIntoView({ behavior: "smooth" });
  });

  // ---- Live booking summary ----
  function updateSummary() {
    var match = findMatch(matchSelect.value);
    var stand = standSelect.value;
    var qty = parseInt(ticketsInput.value, 10);

    sumMatch.textContent = match ? match.label : "-";
    sumStand.textContent = stand ? standLabel(stand) : "-";
    sumQty.textContent = qty > 0 ? qty : "-";

    if (match && stand) {
      var price = match.prices[stand];
      sumPrice.textContent = rupees(price);
      sumTotal.textContent = qty > 0 ? rupees(price * qty) : "-";
    } else {
      sumPrice.textContent = "-";
      sumTotal.textContent = "-";
    }
  }

  [matchSelect, standSelect, ticketsInput].forEach(function (el) {
    el.addEventListener("input", updateSummary);
  });

  // ---- Bookings storage ----
  function loadBookings() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (err) {
      return [];
    }
  }

  function saveBookings(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (err) {
      // Storage can be blocked (private mode); the page still works for this session.
    }
  }

  var bookings = loadBookings();

  function renderBookings() {
    bookingsBody.innerHTML = "";

    if (bookings.length === 0) {
      var empty = document.createElement("tr");
      empty.className = "empty-row";
      empty.innerHTML = '<td colspan="5">No bookings yet.</td>';
      bookingsBody.appendChild(empty);
      return;
    }

    bookings.forEach(function (b) {
      var tr = document.createElement("tr");
      [b.id, b.match, standLabel(b.stand), b.tickets, rupees(b.total)].forEach(function (value) {
        var td = document.createElement("td");
        td.textContent = value; // textContent keeps user-supplied text from being parsed as HTML
        tr.appendChild(td);
      });
      bookingsBody.appendChild(tr);
    });
  }

  // ---- Submit ----
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var match = findMatch(matchSelect.value);
    var stand = standSelect.value;
    var qty = parseInt(ticketsInput.value, 10);
    if (!match || !stand || !(qty > 0)) return;

    var nextId = bookings.length ? Math.max.apply(null, bookings.map(function (b) { return b.id; })) + 1 : 1;

    bookings.push({
      id: nextId,
      match: match.label,
      stand: stand,
      tickets: qty,
      total: match.prices[stand] * qty
    });

    saveBookings(bookings);
    renderBookings();
    form.reset();
    ticketsInput.value = 1;
    updateSummary();
    document.getElementById("bookings").scrollIntoView({ behavior: "smooth" });
  });

  renderBookings();
  updateSummary();
})();
