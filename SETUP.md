# Portfolio Setup Guide

## ✅ Project Successfully Created!

Your modern portfolio website is now ready. The development server is running at **http://localhost:3000**

## 📝 Next Steps to Customize

### 1. Update Your Personal Information

Edit `src/data/portfolio.ts` to add your information:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',              // ← Change this
  title: 'Full Stack Developer',  // ← Change this
  bio: 'Your bio here...',         // ← Change this
  avatar: 'your-avatar-url',       // ← Add your photo URL
  resumeUrl: '/resume.pdf'         // ← Add your resume
};
```

### 2. Update Social Links

In the same file, update your social media links:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',  // ← Your GitHub
    icon: 'github'
  },
  // ... update all links
];
```

### 3. Add Your Skills

Organize your skills by category:

```typescript
export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'expert' },
      // Add your skills here
    ]
  },
  // Add more categories
];
```

### 4. Add Your Projects

Add your actual projects:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'TypeScript'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/you/project',
    featured: true
  },
  // Add more projects
];
```

### 5. Add Work Experience

Update with your work history:

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Your Company',
    role: 'Your Role',
    duration: '2 years',
    startDate: '2022-01',
    description: 'What you did',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2'
    ],
    technologies: ['Tech1', 'Tech2'],
    current: true
  },
  // Add more experiences
];
```

### 6. Update Contact Information

```typescript
export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
  availability: 'Available for work'
};
```

## 🎨 Customization Options

### Change Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change primary color
  },
  secondary: {
    500: '#d946ef',  // Change secondary color
  },
  // ... more colors
}
```

### Modify Sections

Edit `src/App.tsx` to add/remove sections:

```typescript
<main>
  <Hero />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
  {/* Add more sections here */}
</main>
```

### Update Page Title

Edit `index.html`:

```html
<title>Your Name | Portfolio</title>
```

## 🚀 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 📦 Deploy

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Option 2: Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify
3. Done!

### Option 3: GitHub Pages
1. Run `npm run build`
2. Deploy `dist` folder to gh-pages branch

## 🛠️ Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
my-portifolio/
├── src/
│   ├── components/     # All React components
│   ├── data/          # Your portfolio data
│   ├── types/         # TypeScript types
│   ├── App.tsx        # Main app
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
└── [config files]     # Various config files
```

## 💡 Tips

1. **Images**: Add images to `public/` folder and reference as `/image.jpg`
2. **Resume**: Add your resume PDF to `public/resume.pdf`
3. **Favicon**: Replace `public/vite.svg` with your favicon
4. **SEO**: Update meta tags in `index.html`
5. **Dark Mode**: Toggle is in the header (already implemented)

## 🐛 Troubleshooting

### Port already in use?
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Dependencies issues?
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 🎉 You're All Set!

Your portfolio is ready to customize. Start by updating `src/data/portfolio.ts` with your information!

For questions or issues, check the main README.md file.
