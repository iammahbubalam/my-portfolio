# Professional Portfolio Website

A visually stunning portfolio website to showcase expertise as a Backend Engineer and AI/ML Researcher, built with React, TypeScript, Tailwind CSS, and 3D visualizations.

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript for type-safe development
- **Styling:** Tailwind CSS for responsive and efficient design implementation
- **3D Visualizations:** Three.js with React Three Fiber for 3D objects and scenes
- **3D UI Components:** Drei for enhanced Three.js components and abstractions
- **Particle Simulations:** react-tsparticles for dynamic, interactive particle effects
- **Animation:** Framer Motion for smooth transitions and UI animations
- **Routing:** React Router v6 for seamless page navigation
- **Build System:** Vite for fast development and optimized production builds
- **Deployment:** Vercel/Netlify for continuous deployment

## Project Structure

```
portfolio-my/
├── public/
│   ├── assets/
│   │   ├── models/       # 3D models
│   │   ├── images/       # Images and icons
│   │   └── fonts/        # Custom fonts for 3D text
│   └── favicon.svg       # Website favicon
├── src/
│   ├── components/
│   │   ├── layout/       # Layout components (Navbar, Footer, etc.)
│   │   │   ├── Layout.tsx        # Main layout wrapper
│   │   │   ├── Navbar.tsx        # Navigation component
│   │   │   └── Footer.tsx        # Footer component
│   │   ├── ui/           # Reusable UI components
│   │   ├── 3d/           # Three.js components
│   │   │   └── HeroScene.tsx     # 3D scene for hero section
│   │   └── particles/    # Particle effect components
│   │       └── ParticleBackground.tsx # Background particle effect
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── Projects.tsx  # Projects showcase page
│   │   ├── Research.tsx  # Research and publications page
│   │   ├── Blog.tsx      # Blog articles page
│   │   ├── Contact.tsx   # Contact form page
│   │   └── NotFound.tsx  # 404 error page
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── styles/           # Global styles
│   │   └── index.css     # Global CSS with Tailwind imports
│   ├── App.tsx           # Main app component with routing
│   └── main.tsx          # Entry point
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # TypeScript configuration for Node environment
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies and scripts
```

## Features

### 1. Interactive 3D Hero Section
- **Floating 3D objects** representing backend technologies (Java/Spring Boot icons, databases, cloud services)
- **Interactive particle effects** that respond to cursor movement
- **Dynamic camera animations** and smooth transitions
- **Orbital controls** for user interaction with 3D elements
- **Optimized rendering** with viewport detection to improve performance

### 2. Professional Background Section
- **Animated timeline** of professional journey with Framer Motion
- **Interactive tech stack visualization** with hover effects
- **Responsive card layouts** for displaying expertise areas
- **Optimized animations** that trigger on scroll into view

### 3. Backend Engineering Showcase
- **Project cards** with 3D depth effects and hover animations
- **Category filtering system** for organizing projects by type
- **Interactive architecture diagrams** for complex systems
- **Code snippets** with syntax highlighting for technical examples
- **Detailed project information** with technologies used and links

### 4. AI/ML Research Section
- **Interactive visualizations** of machine learning models
- **Publication showcases** with academic and industry research papers
- **Research area categorization** with visual indicators
- **Collaboration highlights** with partner organizations

### 5. Blog/Publications
- **Category-based filtering** for easy content navigation
- **Card-based article previews** with automated read time calculation
- **Newsletter subscription** for content updates
- **Responsive grid layouts** for various screen sizes

### 6. Contact Form
- **Interactive 3D elements** that respond to user interactions
- **Real-time form validation** with visual feedback
- **Animated success/error states** with Framer Motion
- **Alternative contact methods** with social links
- **Social media integration** for professional networking

### 7. Dark/Light Mode
- **System preference detection** for initial theme 
- **Persistent user preference** with local storage
- **Smooth theme transitions** between modes
- **Tailored color schemes** for each theme

## Implementation Details

### React with TypeScript
- Uses functional components with React Hooks
- Leverages TypeScript for type safety and better developer experience
- Implements proper component typing with interfaces and types

### 3D Visualization with Three.js
- Uses React Three Fiber for declarative Three.js implementation
- Implements custom Three.js geometries and materials
- Optimizes 3D rendering with proper mounting/unmounting
- Uses Drei for enhanced Three.js components

### Particle System
- Configures different particle behaviors for various sections
- Implements interactive particle responses to user actions
- Optimizes particle count based on device performance
- Uses react-tsparticles for efficient particle rendering

### Animation System
- Uses Framer Motion for page transitions and UI animations
- Implements scroll-triggered animations with viewport detection
- Creates smooth hover effects for interactive elements
- Optimizes animations for performance

### Responsive Design
- Implements mobile-first design approach with Tailwind CSS
- Creates adaptable layouts for various screen sizes
- Adjusts 3D elements and effects based on device capabilities
- Ensures accessibility across different devices

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/iammahbubalam/portfolio-website.git

# Navigate to project directory
cd portfolio-my

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
# Build the application
npm run build
# or
yarn build

# Preview the production build locally
npm run preview
# or
yarn preview
```

### Linting

```bash
# Run ESLint
npm run lint
# or
yarn lint
```

## Performance Considerations

### 3D Elements
- **Conditional rendering** of 3D elements based on viewport visibility
- **Level-of-detail adjustments** for different devices
- **Optimized geometries** with appropriate polygon counts
- **Texture compression** for faster loading
- **Lazy loading** for 3D models and heavy assets

### Code Splitting
- **React.lazy()** and Suspense for component code-splitting
- **Dynamic imports** for route-based code splitting
- **Chunked loading** of large dependencies

### General Optimizations
- **Progressive loading** indicators for content and 3D scenes
- **Image optimization** with responsive sizing and formats
- **Memoization** of expensive computations with useMemo and useCallback
- **Virtual rendering** for long lists with react-window

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Set environment variables if needed
4. Deploy and get your live URL

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Set environment variables if needed
4. Deploy and get your live URL

## Future Enhancements

- **Blog CMS Integration** with headless CMS like Contentful or Sanity
- **Advanced 3D Interactions** with physics engines
- **WebGL Shaders** for custom visual effects
- **Internationalization** for multiple language support
- **Server-side rendering** for improved SEO
- **Advanced animations** with GSAP for complex sequences
- **Integration with GitHub API** for automated project updates

## Design Philosophy

The portfolio combines professional sophistication with interactive elements that showcase technical expertise. The 3D elements and particle simulations serve not just as visual enhancements but as metaphors for complex systems and backend architecture, reflecting work in software engineering and AI/ML research.

Key design principles include:
- **Progressive disclosure** of information
- **Visual hierarchy** to guide user attention
- **Interactive elements** that invite exploration
- **Dynamic feedback** on user actions
- **Balance between aesthetics and performance**

## Troubleshooting

### Common Issues

1. **3D elements not rendering**
   - Ensure WebGL is enabled in your browser
   - Check for console errors related to Three.js
   - Verify that 3D model paths are correct

2. **Particle effects causing performance issues**
   - Reduce particle count in ParticleBackground.tsx
   - Disable particles on lower-end devices

3. **Build errors**
   - Clear node_modules and reinstall dependencies
   - Check TypeScript errors in the console
   - Verify import paths for case sensitivity

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/)
- [Drei Documentation](https://github.com/pmndrs/drei)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React tsParticles Documentation](https://particles.js.org/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/guide/)

## License

MIT

---

© 2023 Mahbubul Alam. All rights reserved.
