
# SimuSmart E-Commerce Platform

This is a React-based e-commerce application for smart devices, built with TypeScript, Tailwind CSS, and featuring a placeholder for AI-driven features.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation & Running

1.  **Install dependencies:**
    Open your terminal in the project root and run:
    ```bash
    npm install
    ```
    or if you use yarn:
    ```bash
    yarn install
    ```

2.  **Start the development server:**
    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

The application should now be running on `http://localhost:3000` (or another port if 3000 is in use).

## Available Scripts

-   `npm start`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm test`: Runs the test runner.
-   `npm run eject`: Ejects from Create React App.

## Deployment / Hosting

This application is a standard static React build and can be hosted on numerous platforms. Here are some excellent free options:

### Vercel

Vercel (from the creators of Next.js) offers a seamless deployment experience for React applications.

1.  Push your code to a GitHub, GitLab, or Bitbucket repository.
2.  Sign up for a free Vercel account.
3.  Import your project from your Git provider.
4.  Vercel will automatically detect that it's a React app, configure the build settings (e.g., `npm run build`), and deploy it.
5.  You'll get a free `.vercel.app` domain and automatic deployments on every `git push`.

### Netlify

Netlify is another top-tier platform for deploying modern web applications.

1.  Push your code to a GitHub, GitLab, or Bitbucket repository.
2.  Sign up for a free Netlify account.
3.  Create a "New site from Git".
4.  Authorize access to your Git provider and select your repository.
5.  Netlify will automatically set the build command (`npm run build`) and the publish directory (`build`).
6.  Deploy the site. You'll get a free `.netlify.app` domain and continuous deployment.

### GitHub Pages

For a simple, no-frills option, you can host directly on GitHub Pages.

1.  Install the `gh-pages` package: `npm install gh-pages --save-dev`
2.  In your `package.json`, add a `homepage` property: `"homepage": "https://<your-username>.github.io/<your-repo-name>"`
3.  Add deploy scripts to `package.json`:
    ```json
    "scripts": {
      // ... other scripts
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
4.  Run `npm run deploy` to build and deploy your app.
5.  Configure your repository settings to use the `gh-pages` branch for GitHub Pages.
