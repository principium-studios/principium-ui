# Principium UI

A modern React component library with a focus on flexibility, accessibility, and developer experience. Inspired by shadcn/ui's approach of giving you full control over your components.

## Features

- 🎨 **Standalone Plugins**:
  - [`@principium/variants`](./packages/core/variants): A powerful variant system for building component libraries, with multi-slot support and type safety
  - [`@principium/shades`](./packages/core/shades): A Tailwind plugin for creating dynamic, HSL-based color systems with theme support
- 🧩 **Component Library**:
  - CLI-based installation - you own the code
  - Full TypeScript support
  - Accessible by default
  - Customizable with Tailwind CSS
- 📚 **Documentation & Examples**:
  - [principium.dev](https://principium.dev) - comprehensive docs and examples
  - Base components with source code
  - Pre-built compositions showing real-world usage
  - Live component playground

## Getting Started

Visit [principium.dev](https://principium.dev) to:
- Browse available components
- See example compositions
- Read the installation guide
- Explore customization options
- Try components in the playground

## Contributing

Contributions are always welcome!

### Development

1. Clone the repo
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development environment:
   ```bash
   pnpm run docs
   ```

This will start:
- Documentation site at `http://localhost:3000`
- Contentlayer concurrent server which generates all the docs

### Building

- `pnpm build` - Build all packages
- `pnpm build:fast` - Build without typechecking
- `pnpm typecheck` - Run type checks

### Testing

- `pnpm test` - Run tests
- `pnpm test:ui` - Run tests with UI

### Formatting

- `pnpm format:check` - Check formatting
- `pnpm format:write` - Fix formatting

## License

MIT