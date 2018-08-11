import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Grid = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  ${props => props.debug && css`
    background-color: rgba(106,90,205,.2);
  `}

  ${props => props.wrap && css`
    flex-wrap: ${props.wrap}
  `}
`

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  debug: PropTypes.bool,
  wrap: PropTypes.oneOf([
    'wrap', 'nowrap'
  ])
}

Grid.defaultProps = {
  debug: false,
  wrap: 'wrap'
}

export default Grid
