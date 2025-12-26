# Inamdar & Co. - Premium Fintech Website

A modern, responsive React application for Inamdar & Co., featuring a clean financial theme with professional design and smooth animations.

## Features

- ✅ **Clean Financial Theme**: Professional color palette (Deep Navy, Slate Grey, White Space)
- ✅ **Modern React Architecture**: Built with React 18 and modern best practices
- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **Smooth Animations**: Polished transitions and hover effects
- ✅ **Professional Hero Section**: High-impact, authoritative design
- ✅ **Standardized Card Layout**: CSS Grid with perfect alignment
- ✅ **Clean Navigation**: Functional dropdown menus with smooth interactions
- ✅ **Removed Unnecessary Features**: 
  - No Free Business Tools section
  - No Login functionality
  - No Newsletter signup

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation bar (no Login, no Free Business Tools)
│   ├── Hero.js            # Hero section with slider
│   ├── Features.js        # Why Choose Us features
│   ├── WhyChooseUs.js     # Additional benefits section
│   ├── Footer.js          # Footer (no Newsletter)
│   └── BackToTop.js       # Scroll to top button
├── App.js                 # Main app component
├── App.css               # App styles
├── index.js              # Entry point
└── index.css             # Global styles and theme variables
```

## Design System

### Colors
- **Primary Navy**: `#0A2540`
- **Deep Navy**: `#1B3A5E`
- **Slate Grey**: `#4A5568`
- **Accent Blue**: `#2563EB`
- **Accent Teal**: `#0D9488`

### Typography
- **Primary Font**: Inter
- **Headings**: DM Sans

## Key Features Removed

As per requirements, the following have been completely removed:
- Free Business Tools section and navigation
- Login functionality and authentication UI
- Newsletter signup/subscription input

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Inamdar & Co. All rights reserved.

