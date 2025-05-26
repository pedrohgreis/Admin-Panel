import "styled-components";
import { defaultThemes } from "../styles/themes/default";

// * Guarda o valor de tipagem do que está no default.ts
type ThemeType = typeof defaultThemes;

// * O declare module cria uma tipagem para o módulo styled-components
// * Toda vez que importar o styled components,
// * a tipagem que ele vai puxar vai ser oq foi definido aqui
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}