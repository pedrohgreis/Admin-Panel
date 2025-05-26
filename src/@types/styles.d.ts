import "styled-components";
import { defaultThemes } from "../styles/themes/default";

// * Guarda o valor de tipagem do que está no default.ts
type ThemeType = typeof defaultThemes;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
