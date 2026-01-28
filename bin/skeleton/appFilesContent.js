export const gitignoreContent = `# Node modules
node_modules/
dist/
.env
`;
export const eslintrcContent = `{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
`;
export const viteConfigContent = (
  projectName,
) => `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    project: '${projectName}',
    plugins: [react()],
    root: './src',
    base: './',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    server: {
        port: 3000,
    },
});
`;
export const packageJsonContent = (projectName, useMUI) => `{
  "name": "${projectName}",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
    },
    "dependencies": {
        "react": "^18.0.0",
        "react-dom": "^18.0.0"${
          useMUI
            ? `,
        "@mui/material": "^5.0.0",
        "@emotion/react": "^11.0.0",
        "@emotion/styled": "^11.0.0"`
            : ''
        }
    },
    "devDependencies": {
        "vite": "^4.0.0",
        "@vitejs/plugin-react": "^4.0.0",
        "eslint": "^8.0.0", 
        "eslint-plugin-react": "^7.0.0",
        "@typescript-eslint/parser": "^5.0.0",
        "@typescript-eslint/eslint-plugin": "^5.0.0"
    }
}
`;
