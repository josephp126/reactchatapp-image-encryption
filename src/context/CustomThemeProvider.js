import React, { createContext, useContext, useEffect, useState } from 'react'
import { createGlobalStyle, css, ThemeProvider as ThemeProviderStyled } from 'styled-components'

/**
 * Create ThemeContext
 * Context to use theme on the app
 */
export const CustomThemeContext = createContext()

/**
 * Api provider to manage theme
 * @param {props} props
 */
export const CustomThemeProvider = ({ children, ...props }) => {
  const [customTheme, setCustomTheme] = useState(props.customTheme)

  const getThemeColor = () => {
    switch (props.themeType) {
      case 'two':
        return customTheme.colors.darkTextColor
      default:
        return customTheme.colors.colorPage
    }
  }

  const GlobalStyle = createGlobalStyle`
    @media (min-width: 578px) {
      /** Mozilla scrollbar*/
      * {
        scrollbar-color: #CCC !important;
        scrollbar-width: thin !important;
      }
      /** Scrollbar for browser based on webkit */
      ::-webkit-scrollbar {
        width: 6px;
        height: 0px;
      }
      ::-webkit-scrollbar-thumb {
        background: #CCCCCC;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #AFAFAF;
      }
      ::-webkit-scrollbar-thumb:active {
        background: #6b6b6b;
      }
      ::-webkit-scrollbar-track {
        background: rgba(204, 204, 204, 0.3);
      }
    }
    body {
      font-family: '${customTheme.fonts.primary?.name || 'Helvetica'}', sans-serif;
      margin: 0;
      background-color: ${customTheme.colors.backgroundPage};
      color: ${getThemeColor()};
      direction: ltr;
      ${customTheme.rtl && css`
        direction: rtl;
      `}
      -webkit-overflow-scrolling: auto;
    }
    input, textarea, button {
      font-family: inherit;
    }
    h1,p,span {
      ${props.isDarkTextColor && css`
        color: ${customTheme.colors.darkTextColor};
      `}
    }
    .popup-backdrop {
      background-color: rgba(0, 0, 0, 0.4);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 3000;
    }
    .popup-component {
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `

  useEffect(() => {
    const fonts = Object.entries(customTheme.fonts || {})
    fonts.forEach(([name, fontFamily]) => {
      if (!window.document.getElementById(`${name}-font-styles`)) {
        const font = window.document.createElement('link')
        font.id = `${name}-font-styles`
        font.rel = 'stylesheet'
        font.async = true
        font.defer = true
        font.href = `https://fonts.googleapis.com/css2?family=${fontFamily.name}:wght@${fontFamily.weights.join(';')}&display=swap`

        window.document.body.appendChild(font)
      }
    })
  }, [])

  const update = (theme) => {
    setCustomTheme(theme)
  }

  const merge = (partTheme) => {
    setCustomTheme({
      ...customTheme,
      ...partTheme
    })
  }

  return (
    <CustomThemeContext.Provider value={[customTheme, { update, merge }]}>
      <ThemeProviderStyled theme={customTheme}>
        <GlobalStyle />
        {children}
      </ThemeProviderStyled>
    </CustomThemeContext.Provider>
  )
}

/**
 * Hook to get theme state
 */
export const useTheme = () => {
  const themeManager = useContext(CustomThemeContext)
  return themeManager || [{}]
}
