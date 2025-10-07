# Sans Cavité Website - Build Instructions

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## Setup Instructions

1. **Initialize the project:**
   ```bash
   npm create vite@latest sanscavite-website -- --template react-ts
   cd sanscavite-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npm install lucide-react@^0.344.0
   npm install -D tailwindcss@^3.4.1 postcss@^8.4.35 autoprefixer@^10.4.18
   ```

3. **Setup Tailwind CSS:**
   ```bash
   npx tailwindcss init -p
   ```

4. **Replace the generated files with the project files:**
   - Copy all the source files from the project
   - Replace the default Vite template files
   - Add the public assets (images, logos, etc.)

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```

## File Structure
```
sanscavite-website/
├── public/
│   ├── images/
│   └── logos/
├── src/
│   ├── components/
│   │   ├── TreatmentPages/
│   │   └── [other components]
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## Key Files to Copy
1. All TypeScript/React component files from src/
2. Configuration files (package.json, tailwind.config.js, etc.)
3. Public assets (images, logos)
4. Styling files (index.css)

## Deployment Options
- Netlify: Connect your GitHub repo for automatic deployments
- Vercel: Similar to Netlify with GitHub integration
- GitHub Pages: Free hosting for static sites
- Any static hosting service

## Notes
- Make sure all image paths in the code match your public folder structure
- Update any hardcoded URLs or paths as needed
- Test all functionality locally before deploying