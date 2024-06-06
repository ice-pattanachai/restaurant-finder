# My Restaurant App

 ![image](https://raw.githubusercontent.com/ice-pattanachai/restaurant-finder/developer/public/image/Screenshot_6-6-2024_205755_172.20.1.131.jpeg)

## Installation

1. Clone the repository

   - **Using Git**:
     ```bash
     git clone <https://github.com/ice-pattanachai/restaurant-finder.git>
     cd <repository-directory>
     ```
   - **Download as a ZIP file**:
     1. Go to the repository page on GitHub.
     2. Click the "Code" button.
     3. Click "Download ZIP".
     4. Extract the ZIP file.
     5. Navigate to the extracted directory.

2. Install dependencies

   ```bash
   npm install --force
   ```

3. Run the development server

   ```bash
   yarn run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Prerequisites

### Node.js

If you do not have Node.js installed, you can download it from the [official website](https://nodejs.org/) Follow the instructions for your operating system:

- **Windows**

  1. Download the Windows Installer from the [Node.js website](https://nodejs.org/)
  2. Run the installer. Follow the prompts to install Node.js.

- **macOS**

  1. Download the macOS Installer from the [Node.js website](https://nodejs.org/)
  2. Run the installer and follow the instructions.

- **Linux**
  1. You can install Node.js using the package manager for your distribution. For example, on Ubuntu:
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

### Yarn

After installing Node.js, you need to install Yarn. Yarn is a package manager that doubles down as a project manager. You can install Yarn globally using npm:

```bash
npm install --global yarn
```

## Project Dependencies

This project uses several dependencies and devDependencies:

### Dependencies

- **@emotion/react**: Library for writing CSS styles with JavaScript.
- **@emotion/styled**: Styled components for Emotion.
- **@fontsource/kanit**: Self-hosted Google font "Kanit".
- **@mui/icons-material**: Material icons for Material-UI.
- **@mui/material**: Material-UI components.
- **@mui/styles**: Legacy styling solution for Material-UI.
- **next**: React framework for server-side rendering and static site generation.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Entry point of the DOM-related rendering paths.
- **react-mui-sidebar**: Sidebar component for Material-UI.

### DevDependencies

- **@types/node**: TypeScript definitions for Node.js.
- **@types/react**: TypeScript definitions for React.
- **@types/react-dom**: TypeScript definitions for React DOM.
- **eslint**: Linter for JavaScript and TypeScript.
- **eslint-config-next**: ESLint configuration for Next.js.
- **postcss**: Tool for transforming CSS with JavaScript.
- **tailwindcss**: Utility-first CSS framework.
- **typescript**: JavaScript with syntax for types.
