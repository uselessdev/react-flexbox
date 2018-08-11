import { css } from 'styled-components'

export const width = ({ size }) => css`
  flex-basis: calc(100% * ${size})
`
