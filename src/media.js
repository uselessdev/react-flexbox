import { css } from 'styled-components'

const media = (breakpoint, size) => css`
  @media (max-width: ${breakpoint}px) {
    flex-basis: calc(100% * ${size})
  }
`

export const small = size => media(460, size)
export const medium = size => media(768, size)
export const large = size => media(1024, size)

export default media
