import { createGlobalStyle, css, DefaultTheme, GlobalStyleComponent } from 'styled-components'

type GlobalStylesProps = {}

const GlobalStyle: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> = createGlobalStyle`
    ${({theme}) => css`
        html,
        body {
            padding: 0;
            margin: 0;
            background-color: ${theme.colors.dark.primary};
        }
    
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            z-index: 1;
        }
    
        input {
            :focus-visible {
                outline: 0
            }
        }
    `}
`

export default GlobalStyle

