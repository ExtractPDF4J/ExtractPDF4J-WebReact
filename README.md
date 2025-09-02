# ExtractPDF4J Web Site

A minimal React front-end for the ExtractPDF4J project built with [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/). The project is configured to build directly to a `docs/` folder so it can be served via GitHub Pages.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (includes `npm`)

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

### Development Server

Run a hot-reloading development server:

```bash
npm run dev
```

The app will be available at <http://localhost:5173/>.

### Production Build

Create an optimized build in the `docs/` directory:

```bash
npm run build
```

You can preview the built site locally with:

```bash
npm run preview
```

### Deploying to GitHub Pages

1. Run `npm run build` to generate the `docs/` folder.
2. Commit the build output if you want it served from GitHub Pages.
3. Push to `main` and enable **Settings → Pages → Source: `main` / `/docs`**.
4. After Pages is enabled, the site will be available at `https://extractpdf4j.github.io/ExtractPDF4J-WebReact/` (replace `extractpdf4j` with your GitHub username or organization).

## Project Structure

```
├── public/              # Static assets copied as-is
├── src/                 # React components and styles
├── index.html           # Entry HTML template
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration (base set to './')
```

## Contributing

1. Fork the repository and create your branch: `git checkout -b feature/your-feature`.
2. Install dependencies and start the dev server with `npm run dev`.
3. Run `npm run build` before submitting to ensure the project builds.
4. Commit your changes and open a pull request.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).

