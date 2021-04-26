import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  /* :root {
    --white: #fff;

    --gray-50: #f7f8fa;
    --gray-100: #e6e8eb;
    --gray-200: #afb2b1;
    --gray-500: #808080;
    --gray-800: #494d4b;

    --green-500: #04d361;

    --purple-300: #9f75ff;
    --purple-400: #9164fa;
    --purple-500: #8257e5;
    --purple-800: #6f48c9;
  } */

  @media (min-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (min-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${props => props.theme.colors.backgroundPrimary};
  }

  body,
  input,
  textarea,
  button {
    font: 500 1rem Inter, sans-serif;
    color: ${props => props.theme.colors.text500};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: ${props => props.theme.colors.text800};
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

`;