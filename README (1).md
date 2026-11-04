# IPL 2026 Ticket Booking

A static ticket-booking website for IPL 2026 built with HTML, CSS and a little JavaScript.

## Features

- Fixed navigation bar with hover effects
- Gradient hero section with call-to-action buttons
- Match schedule table with a team filter (CSK, MI, RCB)
- Booking form (match, stand, tickets, name, email, phone) with a live booking summary
- "My Bookings" table, saved in the browser with `localStorage`
- Guidelines section: ticket verification, ID proof, prohibited items
- Responsive layout for phones and desktops

## Project structure

```
ipl-ticket-booking/
├── index.html    # page structure and content
├── styles.css    # all styling (CSS variables for colours)
├── script.js     # booking logic
└── README.md
```

## Run locally

No build step is needed. Open `index.html` in a browser, or use the Live Server extension in VS Code.

## Publish on GitHub Pages

1. Push these files to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute the site is live at `https://<your-username>.github.io/<repository-name>/`.

## Sample data

The schedule currently lists one match: RCB vs CSK, 28 March 7:30 PM, Bengaluru (General ₹1500, Premium ₹3500, VIP ₹8000). To add more matches, copy the `<tr data-match="...">` row in `index.html`, give it a new `data-match` number, and update the `data-teams` and price attributes.

## Note

This is a front-end demo. No payment is taken and bookings are stored only in your own browser.
