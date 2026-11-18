# IPL Ticket Booking Website

A multi-page IPL ticket booking website built with HTML, CSS and JavaScript as part of a web development course.

**Author:** Christen Mendis
**SRN:** R25EF067
**GitHub:** [christenmendis07-blip](https://github.com/christenmendis07-blip)
**Repository:** https://github.com/christenmendis07-blip/web-development

---

## Project Structure

```
web-development/
├── index.html      # Home page with the match schedule
├── booking.html    # Ticket booking form
├── styles.css      # Styling for all pages
├── app.js          # JavaScript: toast notifications and smooth scrolling
└── README.md
```

## Activities Completed

| Activity | Topic | Deliverable |
|----------|-------|-------------|
| 2 | Styling with CSS | `styles.css` |
| 3 | Booking form with HTML5 validation | `booking.html` |
| 5 | JavaScript basics and user interaction | `app.js` |

---

## Activity 5: JavaScript Basics and User Interaction

**Objective:** Use JavaScript to enhance user interaction through DOM manipulation and event handling.

### Features

- **Reusable `showToast()` function** for notifications. It creates a toast container on first use, then shows a message that fades in and removes itself after a few seconds.
- **Smooth scrolling.** Clicking a **Book** button in the match schedule smoothly scrolls to the booking form.
- **Confirmation toast.** The Book button also shows a toast, and the booking form shows one when it is submitted successfully.
- **Match preselection.** The Book button fills in the match in the form's Match dropdown (via its `data-match` attribute).

### How It Works

1. `app.js` is linked at the bottom of the HTML page: `<script src="app.js"></script>`
2. Each Book button carries the `book-btn` class and a `data-match` attribute:

   ```html
   <button class="book-btn" data-match="MI vs CSK">Book</button>
   ```

3. When a Book button is clicked, the script:
   - finds the booking form (`#booking-form`),
   - preselects the match in the form,
   - scrolls to the form with `scrollIntoView({ behavior: 'smooth' })`,
   - calls `showToast()` to confirm.

### Using `showToast()`

```js
showToast('Booking confirmed!');                  // green success toast (default)
showToast('Something went wrong', 'error');       // red error toast
showToast('Heads up', 'info', 5000);              // info toast, stays for 5 seconds
```

| Parameter | Description | Default |
|-----------|-------------|---------|
| `message` | Text shown in the toast | required |
| `type` | `'success'`, `'error'` or `'info'` | `'success'` |
| `duration` | Time on screen in milliseconds | `3000` |

---

## Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/christenmendis07-blip/web-development.git
   ```
2. Open the folder in **VS Code**.
3. Right-click `index.html` and choose **Open with Live Server**.
4. Click a **Book** button in the match schedule to see the smooth scroll and toast notification.

## Technologies Used

- HTML5
- CSS3 (custom properties, flexbox, transitions)
- JavaScript (DOM manipulation, event handling)
- VS Code with Live Server
- Git and GitHub
