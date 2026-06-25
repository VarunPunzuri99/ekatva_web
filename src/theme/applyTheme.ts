import { colors, gradients } from "./colors";

/** Inject theme tokens as CSS custom properties on :root */
export function applyTheme(): void {
  const root = document.documentElement;

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--theme-${kebabCase(key)}`, value);
  });

  Object.entries(gradients).forEach(([key, value]) => {
    root.style.setProperty(`--gradient-${kebabCase(key)}`, value);
  });
}

function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
