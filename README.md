# Portfolio Website

> A beautiful portfolio website built with React.js and styled with the Catppuccin Macchiato color scheme

## Features

✨ **Cat Cursor Animation** - A cute cat emoji (😺) follows your cursor around the page!

🎨 **Catppuccin Macchiato Theme** - Beautiful purple-based color scheme

⚛️ **React.js** - Built with React for smooth interactions

📱 **Responsive Design** - Looks great on desktop and mobile

🚀 **Featured Projects** - Showcase your best work including:
  - Taps-Macropad-V3
  - TaoTeChing
  - ByteVile
  - RPForged
  - BuildGuildKolkata
  - MUSE

## Tech Stack

- **Frontend**: React 18
- **Styling**: Pure CSS with Catppuccin Macchiato color scheme
- **Build**: HTML5 + JSX

## Colors Used

The portfolio uses the Catppuccin Macchiato palette:
- **Primary**: Mauve (#c6a0f6) - Main accent color
- **Secondary**: Pink (#f5bde6) - Hover effects
- **Background**: Base (#24273a) and Mantle (#1e2030)
- **Text**: Cad1f5 - Main text color

## Getting Started

### Option 1: Direct Browser
Simply open `index.html` in your web browser. The page uses CDN links for React and Babel, so no installation needed!

### Option 2: Local Server
For development with hot reload:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx http-server
```

Then visit `http://localhost:8000`

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styling (Catppuccin themed)
├── app.jsx         # React components
└── README.md       # This file
```

## Customization

### Change Projects
Edit the `projects` array in `app.jsx` to add or modify your own projects.

### Update Colors
Modify the CSS custom properties in `styles.css` under `:root` to change the color scheme.

### Change Cat Emoji
In `app.jsx`, look for the cat cursor component and replace the emoji:
```jsx
😺  // Change this to your favorite emoji!
```

## Deployment

### GitHub Pages
1. Push this repo to your GitHub account
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://sudo-apt-install-tap.github.io/portfolio/`

### Vercel/Netlify
1. Connect your GitHub repo
2. Set build command to: (leave empty, it's static)
3. Deploy!

## License

MIT - Feel free to use this as a template for your own portfolio!

## Author

**sudo-apt-install-tap** - Hardware Enthusiast & Developer

- GitHub: [@sudo-apt-install-tap](https://github.com/sudo-apt-install-tap)
- Portfolio: [Your deployed URL]

---

Made with 💜 and Catppuccin Macchiato