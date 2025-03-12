# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and modern web technologies.

## Overview

This portfolio website is designed to showcase Likhon Sarker's skills, projects, and experiences as a Full Stack Developer. It features interactive elements, smooth animations, and a responsive design suitable for all devices.

## Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS with variables and responsive design
- **Interactive Background**: React TSParticles
- **Icons**: React Icons
- **3D Graphics**: Three.js with react-three-fiber
- **Animations**: CSS animations and transitions
- **Deployment**: Configured for Vercel deployment

## Project Structure

```
portfolio-my/
├── public/               # Static assets and favicons
├── src/
│   ├── assets/           # Images and media files
│   ├── components/       # React components
│   │   ├── 3d/           # Three.js 3D components
│   │   │   └── HeroScene.tsx
│   │   ├── About.tsx     # About section component
│   │   ├── Contact.tsx   # Contact section component
│   │   ├── Footer.tsx    # Footer component
│   │   ├── Hero.tsx      # Hero section component
│   │   ├── Navbar.tsx    # Navigation bar component
│   │   ├── Projects.tsx  # Projects section component
│   │   └── Skills.tsx    # Skills section component
│   ├── App.tsx           # Main application component
│   ├── App.css           # App-specific styles
│   ├── index.css         # Global styles
│   └── main.tsx          # Entry point
├── .gitignore            # Git ignore configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TS config
├── tsconfig.node.json    # Node-specific TS config
├── vite.config.ts        # Vite configuration
└── vercel.json           # Vercel deployment configuration
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-my
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Customization Guide

### 1. Personal Information

To update personal details, modify these files:

- **src/components/Hero.tsx**: Update name, title, and taglines
- **src/components/About.tsx**: Update bio, professional focus, and competencies
- **src/components/Contact.tsx**: Update contact email and social media links
- **index.html**: Update meta tags, title, and description

### 2. Projects

To update or add projects:

1. Add project images to `src/assets/`
2. Edit the projects array in `src/components/Projects.tsx`:
   ```typescript
   const projects = [
     {
       title: "Your Project Title",
       description: "Project description goes here",
       image: yourProjectImage,
       technologies: ["React", "TypeScript", "MongoDB"],
       demoLink: "https://project-demo-link.com",
       codeLink: "https://github.com/yourusername/project-repo",
     },
     // Add more projects...
   ];
   ```

### 3. Skills

To update skills:

1. Edit the skill arrays in `src/components/Skills.tsx`:
   ```typescript
   const frontendSkills = [
     {
       name: "Your Skill",
       icon: SkillIcon,
       description: "Description of your skill",
     },
     // Add more skills...
   ];
   ```
2. Import any additional icons from React Icons as needed

### 4. Styling

To customize the appearance:

1. Global styles and variables are in `src/index.css`
2. Update the color scheme by changing CSS variables:
   ```css
   :root {
     --primary-color: #your-primary-color;
     --accent-color: #your-accent-color;
     /* Other variables */
   }
   ```

### 5. 3D Scene and Floating Technology Icons

The portfolio features 3D floating technology icons across the entire site. To customize these:

1. Edit `src/components/3d/HeroScene.tsx` to modify the floating icons:
   ```tsx
   // Modify these lines to change which icons appear and their properties
   <FloatingIcon position={[-3, 0, 0]} color="#FF0000" icon="Java" />
   <FloatingIcon position={[-1.5, 2, -2]} color="#3178C6" icon="Spring" scale={0.8} />
   <FloatingIcon position={[2, -1, -1]} color="#336791" icon="SQL" />
   <FloatingIcon position={[0, -2, 2]} color="#47A248" icon="MongoDB" scale={0.9} />
   <FloatingIcon position={[3, 1, 0]} color="#F7DF1E" icon="AI/ML" />
   ```

   - `position`: Array of [x, y, z] coordinates in 3D space
   - `color`: Hex color code for the icon sphere
   - `icon`: Text label to display above the sphere
   - `scale`: Optional size multiplier (default is 1)

- Components use lazy loading and intersection observers to optimize rendering
- 3D elements only render when in view
- Optimized animations for better performance

## Deployment

The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the correct build settings
3. The `vercel.json` file configures routing for the SPA

## Development Notes

- ESLint is configured for code quality and consistency
- TypeScript provides type safety throughout the application
- The project uses strict mode for React

## License

[Add your license information here]

## Contact

For questions or issues, contact [your contact information]
