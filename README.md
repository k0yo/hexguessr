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
HexGuessr is a color guessing game inspired by GeoGuessr. Players test their color perception skills by guessing hex codes of randomly generated colors. The game supports both singleplayer practice and competitive multiplayer modes with specialized color ranges.

## Features
- Color guessing based on hex codes
- CIEDE2000 color difference algorithm for scoring
- Singleplayer and multiplayer modes
- Timed rounds in multiplayer
- Various color maps with different color ranges
- Custom color map creation
- Real-time multiplayer rooms

## Game Modes

### Singleplayer
- Unlimited guessing rounds
- Immediate score feedback
- Color regeneration after each guess
- Personal best score tracking

### Multiplayer
- Join rooms with friends or other players
- Configurable time limits
- Simultaneous guessing
- Leaderboard displaying player accuracy

## Color Maps
Available color maps for different color perception challenges:

- **Full Spectrum**: All possible colors
- **Monochrome**: Black, white, and gray shades
- **Pure Hues**: Fully saturated colors
- **Pastel World**: Light, soft colors
- **Dark Mode**: Deep, dark colors
- **Custom Maps**: User-defined color parameters

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
4. Open `http://localhost:3000` in your browser

## Contributing
Contributions are welcome. Please follow these steps:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the [MIT License](LICENSE)

---

HexGuessr - A color perception challenge
