# Modern Portfolio Website

A stunning, professional portfolio website built with React, TypeScript, and Vite. Features a modern dark theme with gradient backgrounds, glassmorphism effects, and smooth animations.

## 🚀 Features

- **Modern Design**: Dark theme with gradient backgrounds and glassmorphism effects
- **Fully Responsive**: Mobile-first approach with responsive breakpoints
- **TypeScript**: Type-safe code with comprehensive interfaces
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Performance Optimized**: Built with Vite for lightning-fast development and builds
- **Accessible**: WCAG compliant with proper color contrast ratios

## 📋 Sections

1. **Hero/About**: Large name display, professional title, bio, and social links
2. **Skills**: Organized by categories with visual hierarchy
3. **Projects**: Grid layout with project cards, tech tags, and links
4. **Experience**: Timeline layout with work history
5. **Contact**: Contact form with validation and social links

## 🛠️ Tech Stack

- **React 18+**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to customize:
- Personal info (name, title, bio)
- Social links
- Skills and categories
- Projects
- Work experience
- Contact information

### Change Colors

Modify `tailwind.config.js` to update the color palette:
- Primary colors
- Secondary colors
- Accent colors

### Add/Remove Sections

Edit `src/App.tsx` to add or remove sections as needed.

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/           # Portfolio data
│   │   └── portfolio.ts
│   ├── types/          # TypeScript types
│   │   └── index.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎯 Key Features Explained

### Dark Mode
The site uses Tailwind's dark mode with the `class` strategy. Toggle is available in the header.

### Smooth Scrolling
Navigation links use smooth scrolling to sections with active section highlighting.

### Responsive Design
Mobile-first approach with breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Animations
- Fade-in on page load
- Scroll-triggered animations
- Hover effects on cards and buttons
- Smooth transitions

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!
