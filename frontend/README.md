# Portfolio Website Frontend

This is the React frontend for the portfolio website.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS
- **React Router**: Client-side routing between pages
- **Component-Based Architecture**: Modular and reusable components
- **API Integration**: Fetches data from Flask backend
- **Modern UI/UX**: Clean, professional design with smooth animations

## Components

- `Navbar`: Responsive navigation with mobile menu
- `Hero`: Landing section with personal introduction
- `Skills`: Displays technical skills organized by category
- `ContactForm`: Contact form with validation
- `ProjectCard`: Individual project display
- `Home`: Main home page component
- `Projects`: Projects page with filtering

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js      # Navigation component
│   ├── Hero.js        # Hero section
│   ├── Skills.js      # Skills display
│   ├── ContactForm.js # Contact form
│   └── ProjectCard.js # Project card
├── pages/              # Page components
│   ├── Home.js        # Home page
│   └── Projects.js    # Projects page
├── styles/             # CSS files
│   ├── App.css        # Global styles
│   ├── Navbar.css     # Navigation styles
│   ├── Hero.css       # Hero section styles
│   ├── Skills.css     # Skills styles
│   ├── ContactForm.css # Form styles
│   ├── Projects.css   # Projects page styles
│   ├── ProjectCard.css # Project card styles
│   └── Home.css       # Home page styles
├── App.js              # Main app component
└── index.js            # App entry point
```

## Styling

The project uses custom CSS with:
- CSS Grid and Flexbox for layouts
- CSS custom properties for theming
- Responsive design with media queries
- Smooth transitions and hover effects
- Modern CSS features like backdrop-filter

## API Integration

The frontend communicates with the Flask backend via:
- `/api/projects` - Fetch project data
- `/api/skills` - Fetch skills data

## Customization

To customize the portfolio:

1. Update personal information in `Hero.js`
2. Modify skills in `Skills.js` or the backend API
3. Add/remove projects in the backend data
4. Customize colors and styling in CSS files
5. Update the logo and branding in `Navbar.js`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes
