# WEKA REST API Documentation

A documentation viewer for the WEKA REST API across multiple versions. This project provides an interactive Swagger UI interface to explore and understand the WEKA system's RESTful API capabilities.

All API documentation files are stored in `/public/docs/` as JSON files.

## Contributing

When adding new API documentation versions:

1. Place the new JSON file in `/public/docs/`
2. Update the `urls` array in `src/main.js` to include the new version
3. Follow the existing naming convention: `{version}.json`

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- Yarn package manager

### Installation

```bash
yarn install
```

### Development

```bash
yarn start
```

The application will be available at `http://localhost:5000` (or the next available port).

### Building for Production

```bash
yarn build
```

The built files will be generated in the `dist/` directory.

### Preview Production Build

```bash
yarn preview
```

### Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. Simply push your changes to the `main` branch and the CI/CD pipeline will:

1. Build the application using `yarn build`
2. Deploy the built files to GitHub Pages automatically

No manual deployment commands are needed.
