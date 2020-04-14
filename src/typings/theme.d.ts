import 'styled-components'

import { theme } from 'styles'

type Theme = typeof theme
// see https://styled-components.com/docs/api#create-a-theme
// this extends the existing DefaultTheme from styled-components and brings the typing to props.theme in functions
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
