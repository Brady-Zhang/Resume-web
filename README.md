# Personal Portfolio Website

A modern single-page scrolling personal website built with Next.js 15 + TypeScript + Tailwind CSS + Vanta.js.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production version
npm run build
```

## 📁 Project Structure

```
resume-app/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Single-page scrolling main page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Anchor navigation component
│   ├── VantaBackground.tsx # Vanta.js animation background
│   ├── ScrollArrow.tsx    # Scroll arrow component
│   ├── sections/          # Page section components
│   │   ├── HomeSection.tsx    # Home section
│   │   ├── ProjectSection.tsx # Project section
│   │   └── AboutSection.tsx   # About section
│   └── index.ts          # Component exports
├── hooks/                # Custom Hooks
│   └── useScrollWheel.ts # Scroll wheel listener Hook
├── types/                # TypeScript type definitions
│   └── vanta.d.ts        # Vanta.js types
└── ...
```

## 🎯 Page Structure

**Single-page scrolling design** - Three full-screen sections:

- **Home** - Main section with integrated Vanta.js HALO animation background
- **Project** - Project showcase section
- **About** - Personal introduction section

## ✨ Scrolling Features

### 🖱️ Multiple Scrolling Methods

1. **Mouse Wheel** - Intelligently detects scroll direction, automatically jumps to next/previous section
2. **Navigation Bar Click** - Click navigation menu to jump directly to specified section
3. **Scroll Arrows** - Up and down arrow buttons at the bottom of each section

### 🎭 Scrolling Characteristics

- ⚡ **Smooth Scrolling** - CSS scroll-behavior and JavaScript scrollIntoView
- 🎯 **Smart Jump** - Wheel listener automatically jumps to complete sections
- 📍 **Active Indicator** - Navigation bar highlights current section in real-time
- 🚫 **Debounce Handling** - Prevents jumping due to too fast scrolling
- 📱 **Responsive** - Perfect adaptation for desktop and mobile

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Vanta.js + Three.js
- **Scrolling**: Custom wheel listener + CSS smooth scroll
- **Development Tools**: ESLint

## 🎨 Design Features

- 🌟 **Vanta.js 3D Animation Background** - Cool dynamic effects in Home section
- 🎭 **Frosted Glass Navigation Bar** - Semi-transparent background blur effect
- 🔘 **Beautiful Scroll Arrows** - Semi-transparent circular button design
- 📱 **Fully Responsive** - Adapts to various screen sizes
- 🎨 **Modern Design** - Clean and elegant visual style

Visit [http://localhost:3000](http://localhost:3000) to see the effect.

## 🎮 Usage Instructions

1. **Scrolling Experience**: Use mouse wheel to smoothly switch between three sections
2. **Quick Navigation**: Click top navigation bar to jump directly
3. **Precise Control**: Use arrow buttons at bottom of pages for section-by-section navigation
