// Activity 7: Selector Forms and Live Interaction Using JavaScript

// Select form controls using DOM selectors
const bookingForm = document.getElementById("bookingForm");
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

// Select Booking Summary elements
const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryPrice = document.getElementById("summaryPrice");
const totalPrice = document.getElementById("totalPrice");

// Display a toast notification
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

// Update the Booking Summary
function updateSummary() {
    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;

    let quantity = parseInt(quantityInput.value, 10);

    // Keep quantity within the allowed range
    if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
        quantityInput.value = 1;
    }

    if (quantity > 10) {
        quantity = 10;
        quantityInput.value = 10;
    }

    // Read the price from the selected stand option
    const selectedOption = standSelect.options[standSelect.selectedIndex];
    const price = parseInt(selectedOption.dataset.price, 10);

    // Calculate total price
    const total = price * quantity;

    // Update the summary card
    summaryMatch.textContent = selectedMatch;
    summaryStand.textContent = selectedStand;
    summaryQuantity.textContent = quantity;
    summaryPrice.textContent = price.toLocaleString("en-IN");
    totalPrice.textContent = total.toLocaleString("en-IN");

    showToast("Booking summary updated!");
}

// Update when Match, Stand, or Quantity changes
matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
quantityInput.addEventListener("change", updateSummary);
quantityInput.addEventListener("input", updateSummary);

// Prevent form submission from reloading the page
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    updateSummary();
    showToast("Tickets selected successfully!");
});

// Show the initial booking summary
updateSummary();
