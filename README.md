# HexGuessr - A Color Guessing Game

 ![HexGuessr Logo](logo.svg)

## Table of Contents
- [About](#about)
- [Features](#features)
- [Game Modes](#game-modes)
- [Color Maps](#color-maps)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## About
HexGuessr is a fun, interactive color guessing game inspired by GeoGuessr. Test your color perception skills by guessing hex codes of randomly generated colors! Play solo or challenge friends in multiplayer mode with specialized color "maps" that focus on specific color ranges.

## Features
- **Color Guessing**: Guess the hex code of the displayed color
- **CIEDE2000 Scoring**: Accurate color difference algorithm for fair scoring
- **Multiple Game Modes**: Singleplayer practice or competitive multiplayer
- **Timed Rounds**: Timed guessing periods in multiplayer
- **Color Maps**: Specialized color ranges like monochrome, pure hues, etc.
- **Custom Maps**: Create your own color maps with custom parameters
- **Multiplayer Rooms**: Play with friends in real-time

## Game Modes

### Singleplayer
- Unlimited guessing rounds
- Immediate feedback with your score
- Color resets after each guess
- Track your personal best scores

### Multiplayer
- Join rooms with friends or random players
- Customizable time limit
- All players guess simultaneously
- Leaderboard shows who's the most color-accurate

## Color Maps
Choose from various color maps to test different aspects of your color perception:

- **Full Spectrum**: All possible colors
- **Monochrome**: Shades of black, white, and gray
- **Pure Hues**: Fully saturated colors only
- **Pastel World**: Soft, light colors
- **Dark Mode**: Deep, dark colors
- **Custom Maps**: Create your own color parameters

## Installation
To run HexGuessr locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/k0yo/hexguessr.git
   ```
2. Install dependencies:
   ```bash
   cd hexguessr
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:3000`

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the [MIT License](LICENSE)

---

**HexGuessr** - How well do you really know colors? 🎨
