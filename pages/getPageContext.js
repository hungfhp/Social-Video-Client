import { SheetsRegistry } from 'jss'
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d'
    }
  },
  drawers: {
    left: {
      width: 240
    }
  },
  spacing: {
    unit: 8
  },
  typography: {
    useNextVariants: true,
    subtitle1: {
      fontWeight: 500
    },
    subtitle2: {
      fontWeight: 500
    }
  }
})

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  }
}

let pageContext

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext()
  }

  return pageContext
}
