import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary300: string;
      primary400: string;
      primary500: string;
      primary800: string;

      secondary: string;

      backgroundDeep: string;
      backgroundPrimary: string;
      backgroundSecondary: string;

      text50: string;
      text100: string;
      text200: string;
      text500: string;
      text800: string;

      base: string;

      black: string,
      white: string,
    }
  }
}