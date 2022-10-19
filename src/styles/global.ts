import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0px 0px 0px 0px ${(props) => props.theme['yellow-dark']};
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }
`
