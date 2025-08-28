# Tauri Starter Template

This is a starter template for building cross-platform desktop applications using Tauri, React, and TypeScript. It includes the basic setup for a Tauri application with React frontend, Tailwind CSS for styling, and some common utilities.

## Features

- **Tauri/Rust Backend**: Cross-platform desktop application framework
- **React Frontend**: Modern UI with React and TypeScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Component library for building beautiful interfaces
- **Zustand**: State management
- **HeroUI**: UI components and utilities
- **MagicUI**: UI Animation based on framer motion and shadcn

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Run in development mode:
```bash
bun run tauri dev
```

3. Build for production:
```bash
bun run tauri build
```

## Configuration

### Tauri Settings
- App name: `tauri-starter-template`
- Version: `0.1.0`
- Identifier: `com.tauri-starter-template.app`
- Window minimum size: 900x900 pixels (minimum)

### Development Server
- Dev URL: `http://localhost:1420`
- HMR port: `1421`

## Build Process

The project uses Vite for development and build processes. The `src-tauri` directory contains the Rust code that handles Tauri-specific functionality, while the `src` directory contains the React frontend.

The build process is configured to:
1. Run the frontend dev server at `http://localhost:1420`
2. Build the frontend into the `dist` directory
3. Package everything into a desktop application using Tauri

## Contributing

This is a starter template that can be customized based on your specific needs. Feel free to modify components, add new features, or change the overall structure of the application.

For more information about Tauri development, visit the [Tauri documentation](https://tauri.app/).
```

