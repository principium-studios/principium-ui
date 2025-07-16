# Principium React Component Library

A collection of reusable, accessible and customizable React components.

## Components

| Component                                          | Description                                         |
| -------------------------------------------------- | --------------------------------------------------- |
| [Alert](./packages/components/alert)               | Primitive for alert / call-out messages             |
| [Badge](./packages/components/badge)               | Small status label to highlight information         |
| [Button](./packages/components/button)             | Accessible button with configurable variants        |
| [Card](./packages/components/card)                 | Surface container with header / body / footer slots |
| [Divider](./packages/components/divider)           | Horizontal / vertical separator                     |

| Helper Component                                   | Description                                         |
| -------------------------------------------------- | --------------------------------------------------- |
| [Primitive](./packages/components/utils/primitive) | Helper that adds `asChild` support to any element   |
| [Slot](./packages/components/utils/slot)           | Utility for slot-based composition                  |

## Contributing

Contributions are always welcome!

### 1. Creating a new component

- You can create a new component via the `pnpm run create:comp` command.
- The starter template includes a shared **tsup.config.ts** and **tsconfig.json**, so you don't need to configure them yourself. It also contains a **package.json** with all the necessary scripts and minimal dependencies.

### 2. Making a component

- The components in this project are built to be used like shadcn components and styled to resemble HeroUI.
- Naming should be in the format of `[component-name]`, `[component-name]Trigger`, `[component-name]Content` or other variants.
- Styling should be done using Tailwind CSS. For components that provide variants and colors you can use the `class-variance-authority` package alongside the [colorVariants](./packages/components/utils/shared/src/colorVariants.ts) helper to match each case.

### 3. Building the components

- To build the components run `pnpm run build` or `pnpm run build:fast` to build the components without typechecking.
- To typecheck the components run `pnpm run typecheck`.

### 4. Testing the components

- To test the components run `pnpm run test` or `pnpm run test:ui` to test the components with vitest or vitest ui.

### 5. Formatting the components

- To format the components run `pnpm run format:check` to check if the components are formatted correctly or `pnpm run format:write` to format the components.

### 6. Development

- Run `pnpm run sb` to start the custom "storybook" server.
