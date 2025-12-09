Virtual Ring Light 💡

Turn any monitor into a soft, configurable light for TikTok, Instagram Reels, video calls, or recording – no physical ring light needed.

## Demo

Live: `https://ashunasar.github.io/virtual-ring-light/`

Open this URL on any laptop/monitor, go fullscreen, and use the controls to tune your lighting.

---

## Features

- Adjustable brightness (0–100%)
- Adjustable color temperature (2700K–6500K)
- Multiple presets:
  - Warm, Neutral, Cool
  - Soft, Sunset, Night Mode, Green Screen, Daylight
- Fullscreen toggle (button + `F` key)
- Show/Hide controls (`H` key)
- Keyboard shortcuts for quick tuning:
  - `Arrow Up/Down` – brightness
  - `Arrow Left/Right` – temperature
- Settings persisted in `localStorage` (remembers last used values)
- Responsive UI, works on laptops, desktops, and external monitors

---

## Use Cases

- Using your laptop screen as a ring light for:
  - TikTok / Reels / Shorts
  - YouTube / streaming
  - Zoom / Google Meet / video calls
- Lighting your face from multiple angles by opening the app on multiple screens
- Testing different lighting moods (warm, cool, soft, etc.) without buying hardware

---

## Getting Started (Local Development)

```bash
# Clone the repo
git clone https://github.com/ashunasar/virtual-ring-light.git
cd virtual-ring-light

# Install dependencies
npm install

# Run dev server
npm run dev
```

By default (with `--host`), you can access it on:

- `http://localhost:5173/` (same machine)
- `http://YOUR_LOCAL_IP:5173/` (other devices on same WiFi)

> Tip: On macOS, use `ifconfig | grep "inet " | grep -v 127.0.0.1` to find your local IP.

---

## GitHub Pages Deployment

This project is configured to deploy as a static site to GitHub Pages.

### Build & Deploy

```bash
# Build and push to gh-pages branch
npm run deploy
```

The app is served from:

```text
https://ashunasar.github.io/virtual-ring-light/
```

The `base` path in the Vite config is set to `/virtual-ring-light/` so assets resolve correctly on GitHub Pages.

---

## Tech Stack

- React + TypeScript
- Vite
- CSS (no UI frameworks)
- LocalStorage for persistence

---

## Keyboard Shortcuts

- `F` – Toggle fullscreen
- `H` – Show / Hide controls
- `Arrow Up` – Increase brightness
- `Arrow Down` – Decrease brightness
- `Arrow Right` – Increase color temperature
- `Arrow Left` – Decrease color temperature

---

## How to Use for Lighting

1. Open the app in your browser.
2. Click the **Fullscreen** button or press `F`.
3. Place your camera just above or behind the monitor.
4. Pick a preset (Soft / Warm / Cool etc.).
5. Fine-tune using sliders or arrow keys until your face looks well lit.
6. Optionally open the URL on another device/monitor for multi-directional lighting.

---

## Future Ideas

- Per-preset customization and saving
- Multi-monitor awareness / hints
- Auto-dim at night based on system time
- Mobile-optimized “phone as light” mode

---

## License

MIT – feel free to use, modify, and share. A link back to the repo is appreciated if you find it useful.
