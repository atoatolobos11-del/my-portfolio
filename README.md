# Personal Portfolio Website

A modern personal portfolio website inspired by the provided UI reference. Built with a dark minimalist theme featuring orange highlights, rounded containers, and professional UI/UX design.

## Tech Stack

- **Frontend**: [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Node.js](https://nodejs.org/)
- **Containerization**: [Docker](https://www.docker.com/)
- **Version Control**: [Git](https://git-scm.com/) / [GitHub](https://github.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Features

- Dark professional theme with orange accent color
- Modern glassmorphism elements
- Responsive design
- Minimalist UI
- Clean typography

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker

```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 8080:80 portfolio
```

## Project Structure

```
portfolio/
├── public/          # Static assets
├── src/             # Source files
│   ├── assets/      # Images and assets
│   ├── App.jsx      # Main App component
│   ├── index.css    # Global styles
│   └── main.jsx     # Entry point
├── Dockerfile       # Docker configuration
├── vercel.json      # Vercel deployment config
└── vite.config.js   # Vite configuration
```

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments on push to main.
