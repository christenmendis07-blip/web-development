// app.js - Activity 5: JavaScript basics (DOM manipulation + event handling)
// Linked from the HTML page with: <script src="app.js" defer></script>

/**
 * Reusable toast notification.
 * @param {string} message          Text to show.
 * @param {'success'|'error'|'info'} [type='info']  Colour/style of the toast.
 * @param {number} [duration=3000]  How long it stays visible (ms).
 */
function showToast(message, type = 'info', duration = 3000) {
  // Create the container once, then reuse it for every toast.
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  container.appendChild(toast);

  // Force a reflow so the CSS transition runs, then fade the toast in.
  void toast.offsetHeight;
  toast.classList.add('show');

  // Fade out and remove after `duration`.
  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(function () {
      toast.remove();
    }, 400); // matches the CSS transition time
  }, duration);
}

/**
 * Smoothly scroll to an element on the page.
 * Respects the user's "reduce motion" setting.
 * @param {string} selector  CSS selector of the target, e.g. '#booking-form'.
 * @returns {boolean}        true if the element was found.
 */
function smoothScrollTo(selector) {
  const target = document.querySelector(selector);
  if (!target) return false;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start'
  });
  return true;
}

// Event handling: one listener on the document covers every Book button.
// Any element with class="book-btn" works, e.g.
// <button class="book-btn" data-match="MI vs CSK">Book</button>
document.addEventListener('click', function (event) {
  const bookBtn = event.target.closest('.book-btn');
  if (!bookBtn) return;

  event.preventDefault(); // stops the instant jump if the button is a link

  const match = bookBtn.dataset.match;
  const found = smoothScrollTo('#booking-form');

  if (found) {
    showToast(
      match
        ? 'Booking ' + match + ' - please fill in the form below.'
        : 'Please fill in the booking form below.',
      'success'
    );
  } else {
    showToast('Booking form not found on this page.', 'error');
  }
});
