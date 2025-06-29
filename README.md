# SimuSmart E-Commerce Platform

This is a modern, professional e-commerce application for smart devices, built with React, TypeScript, and Vite. It features a stunning UI, an AI-powered shopping assistant, semantic product search, and a comprehensive admin panel.

## Features

- **Modern Tech Stack**: React, TypeScript, Vite, Tailwind CSS.
- **AI Shopping Assistant**: A streaming, conversational chatbot to help users.
- **AI Semantic Search**: Go beyond keywords to find products based on what users mean.
- **Full E-commerce Flow**: Product categories, shopping cart, checkout, and order confirmation.
- **Comprehensive Admin Panel**: Manage products, categories, orders, and store settings.
- **Theming**: Light and Dark mode support.
- **Responsive Design**: Looks great on all devices.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (or yarn/pnpm)
- An API Key from Google AI Studio for the AI features.

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    Create a `.env.local` file in the root of the project and add your Google AI API key:
    ```
    API_KEY=your_google_ai_api_key_here
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

The application will be running on `http://localhost:5173`.

## Available Scripts

-   `npm run dev`: Runs the app in development mode with hot-reloading.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run preview`: Serves the production build locally to test it.

## Deployment / Hosting

This Vite application builds to a static `dist` directory, making it compatible with any modern static hosting provider.

### Vercel / Netlify

Both Vercel and Netlify offer a seamless deployment experience.

1.  Push your code to a GitHub repository.
2.  Sign up for a free account and import your project from Git.
3.  The platform will automatically detect it's a Vite app and use the correct settings (`npm run build` command, `dist` output directory).
4.  **Important**: Add your `API_KEY` as an environment variable in the project settings on Vercel or Netlify.
5.  Deploy. You'll get a free public URL with automatic deployments on every `git push`.
