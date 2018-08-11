import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { width } from './width'
import {
  large,
  medium,
  small
} from './media'

const Col = styled.div`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;

  ${props => props.small && small(props.small)}
  ${props => props.medium && medium(props.medium)}
  ${props => props.large && large(props.large)}

  ${props => props.size && width(props)}

  ${props => props.debug && css`
    background-color: rgba(106,90,205,.2);
  `}
`

Col.propTypes = {
  children: PropTypes.node.isRequired,
  debug: PropTypes.bool,
  large: PropTypes.number,
  medium: PropTypes.number,
  size: PropTypes.number,
  small: PropTypes.number
}

Col.defaultProps = {
  debug: false,
  large: null,
  medium: null,
  size: 1,
  small: null
}

export default Col
