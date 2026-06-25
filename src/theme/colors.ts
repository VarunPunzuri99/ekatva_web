/**
 * Ekatva brand color tokens — single source of truth.
 * Replace these values to update the entire application palette.
 */
export const colors = {
  primary: "#D89A2B",
  primaryLight: "#FFB71C",
  secondary: "#B86B14",
  accent: "#F7E6C4",
  accentMuted: "#E8D5A8",
  background: "#FFF9F1",
  backgroundAlt: "#F5EDE0",
  surface: "#FFFFFF",
  surfaceGlass: "rgba(255, 249, 241, 0.72)",
  dark: "#3B2514",
  darkDeep: "#40080A",
  text: "#2E2E2E",
  textMuted: "#6B5B4F",
  textLight: "#FFF9F1",
  border: "rgba(216, 154, 43, 0.25)",
  borderLight: "rgba(255, 255, 255, 0.18)",
  success: "#2D6A4F",
  error: "#9B2226",
  overlay: "rgba(59, 37, 20, 0.55)",
  overlayLight: "rgba(255, 249, 241, 0.85)",
} as const;

export const gradients = {
  brand: `linear-gradient(180deg, ${colors.primaryLight} 0%, ${colors.darkDeep} 100%)`,
  brandHorizontal: `linear-gradient(90deg, ${colors.primaryLight} 0%, ${colors.secondary} 50%, ${colors.darkDeep} 100%)`,
  hero: `linear-gradient(180deg, ${colors.overlayLight} 0%, ${colors.background} 40%, ${colors.backgroundAlt} 100%)`,
  card: `linear-gradient(180deg, ${colors.primaryLight} 0%, ${colors.secondary} 45%, ${colors.dark} 100%)`,
  glass: `linear-gradient(135deg, rgba(255,249,241,0.9) 0%, rgba(247,230,196,0.6) 100%)`,
  footer: `linear-gradient(180deg, transparent 0%, ${colors.overlay} 100%)`,
} as const;

export type ColorToken = keyof typeof colors;
export type GradientToken = keyof typeof gradients;
