# The Physic Sim

**A physics playground powered by p5.js** — experiment with gravity, velocity, acceleration, and collisions, all in your browser.

---

## Overview

The Physic Sim lets you interactively create objects and tweak their physical properties to observe how they behave in real time. It’s a fun and educational tool to explore open-ended physics concepts visually.

---

## Demo

⚡ Clickable objects, custom physics, real-time rendering — jump right into the simulation:

[Open Demo](https://danny-wits.github.io/The_Physic_Sim_P5_JS/)

---

## Getting Started

### Prerequisites

- Node.js and npm (optional; used if you're running a local server or module bundler)

### Installation

```bash
git clone https://github.com/Danny-Wits/The_Physic_Sim_P5_JS.git
cd The_Physic_Sim_P5_JS
npm install    # optional
```

### Run

- Open `index.html` in your browser
- Or run a local dev server with `npm start` (if configured)

---

## Usage

- **Create objects**: Click anywhere on the canvas
- **Customize**: Adjust name, mass, velocity, acceleration, and color via the input panel
- **Reset inputs**: Clears the fields
- **Reset objects**: Removes all objects from the simulation
- Watch them gracefully (or chaotically) interact according to gravity, motion, and collisions

---

## Features

- Real-time physics-based rendering
- Full interactivity for object creation
- Collision detection and physical response
- Adjustable gravity, velocity, and acceleration
- Smooth object path visualization

---

## Project Structure

```
/
├── physic.js        # Physics engine and object classes
├── sketch.js        # p5.js logic and simulation setup
├── index.html       # HTML structure and UI
├── style.css        # Visual styling
├── p5.js            # p5.js library
├── p5.sound.min.js  # Optional audio support
├── package.json     # Project metadata and dependencies
└── data.js, jsconfig.json  # Config files
```

---

## Dependencies

- [p5.js](https://p5js.org) — core creative coding library
- `p5.sound.min.js` — adds interactive audio capabilities (optional)

---

## License

Licensed under the **ISC License** — free to use, modify, and share.

---

## Author

**Danny Wits**
📫 Email: [dannywits2003@gmail.com](mailto:dannywits2003@gmail.com)
🐙 GitHub: [@Danny-Wits](https://github.com/Danny-Wits)

---

## Acknowledgments

Huge thanks to the \[p5.js community] for inspiration and compatibility tools.
