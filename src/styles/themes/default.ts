export const defaultThemes = {
  white: "#FFFFFF",

  "pink-50": "#FFF0F5",
  "pink-200": "#FFC2D1",
  "pink-300": "#f68dab",
  "pink-400": "#ed6691",
  "pink-500": "#d94f7e",

  "gray-100": "#EEE4E4",
  "gray-200": "#99A1AF",
  "gray-300": "#deeef0",
  "gray-400": "#A2A5C4",
  "gray-700": "#5A5D84",

  "blush-300": "#f3b1bb",
} as const;

// Exportando o tipo do tema
export type DefaultThemeType = typeof defaultThemes;
