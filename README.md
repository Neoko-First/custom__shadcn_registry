# TurboCn

This project provides a custom ShadCN component registry.

## Configuration

### 1. Initialize ShadCN

As explained in the introduction, most components are based on [ShadCN](https://ui.shadcn.com).

Follow the ShadCN documentation to initialize the CLI:
[https://ui.shadcn.com/docs/cli#init](https://ui.shadcn.com/docs/cli#init)

### 2. Add a namespace in your `components.json`

This allows the ShadCN CLI to fetch and install components directly from this registry.

```json
"@turbocn": {
  "url": "https://customshadcnregistry.vercel.app/r/{name}.json"
}
```

### 3. Clone a component

```bash
npx shadcn@latest add @turbocn/input
```

## Components list

### Input

A fork of the base ShadCN input with accessibility improvements and enhanced styling, including optional icons.

```bash
npx shadcn@latest add @turbocn/input
```
