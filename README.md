# The Teak — Furniture Website

A responsive website for **The Teak**, handcrafted teak & mahogany furniture made in Sri Lanka.

Built with plain HTML, CSS and JavaScript, so there is no build step and nothing to install.

## Features

- Hero slider, room collections and a product grid with category filters
- Quick-view product pop-up with finish options and quantity
- Cart and wishlist, saved in the browser
- Orders and enquiries sent through WhatsApp
- Made-to-measure section, showroom info, testimonials and gallery
- Mobile-friendly layout with scroll animations

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5500
# then visit http://localhost:5500
```

## Customise

- **WhatsApp number:** `SETTINGS.whatsapp` at the top of `js/main.js`
- **Products and prices:** the `PRODUCTS` list in `js/main.js`
- **Contact details and address:** `index.html`
- **Colours and fonts:** the `:root` variables at the top of `css/style.css`

## Project structure

```
index.html      Page layout and content
css/style.css   Styles and responsive layout
js/main.js      Products, cart, sliders and interactions
```
