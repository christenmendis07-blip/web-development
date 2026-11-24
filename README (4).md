# IPL Ticket Booking Website

A front-end web project for booking IPL match tickets, built with HTML, CSS and JavaScript.

**Author:** Christen Mendis
**Repository:** https://github.com/christenmendis07-blip/web-development

## Features

- **Responsive layout** with a fixed navigation bar, gradient hero section and styled match schedule, cards, forms and footer (`styles.css`, using CSS variables for the primary, accent, background and text colours).
- **Ticket booking form** (`booking.html`) with Name, Email, Phone, Match, Stand Category, Number of Tickets, preference options, and Submit / Reset buttons. Validation uses HTML5 attributes (`required`, `min`, `max`, `minlength`, `maxlength`).
- **Smooth scrolling** (`app.js`): clicking a Book button in the match schedule scrolls smoothly to the booking form. It respects the browser's "reduce motion" setting.
- **Toast notifications** (`app.js`): a reusable `showToast()` function shows short success, error or info messages, for example a confirmation after clicking Book.

## Project Structure

```
web-development/
├── index.html     # Home page with the match schedule
├── booking.html   # Ticket booking form
├── styles.css     # Styling, including toast styles
├── app.js         # showToast() and smooth scrolling
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/christenmendis07-blip/web-development.git
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (requires the Live Server extension).

## Using the JavaScript

Link the script at the end of the HTML page:

```html
<script src="app.js" defer></script>
```

**Book button:** give each button the `book-btn` class and the match name. The booking form needs `id="booking-form"`.

```html
<button class="book-btn" data-match="MI vs CSK">Book</button>
```

**Toast notification:** call `showToast()` from anywhere.

```js
showToast('Booking confirmed!', 'success');       // green
showToast('Please fill in all fields', 'error');  // red
showToast('Tickets are limited', 'info', 5000);   // blue, visible for 5 seconds
```

| Parameter  | Description                                  | Default  |
|------------|----------------------------------------------|----------|
| `message`  | Text to display                              | required |
| `type`     | `'success'`, `'error'` or `'info'`           | `'info'` |
| `duration` | How long the toast stays visible, in ms      | `3000`   |

## Activities Covered

- **Activity 2:** Styling the page with `styles.css`
- **Activity 3:** Booking form with HTML5 validation (`booking.html`)
- **Activity 5:** JavaScript basics, DOM manipulation and event handling (`app.js`)
