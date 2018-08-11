import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Col,
  Grid,
} from '../src'

const Text = ({ children }) => (
  <span
    style={{
      width: '100%',
      display: 'block',
      marginTop: 10,
      marginBottom: 10,
      color: 'white',
      lineHeight: 3,
      textAlign: 'center',
      borderRadius: 4,
      backgroundColor: 'slateblue',
    }}
  >
    { children }
  </span>
)

storiesOf('Grid', module)
  .add('default', () => (
    <Grid>
      <Col><Text>full size column</Text></Col>
      <Col size={1/2}><Text>1/2</Text></Col>
      <Col size={1/2}><Text>1/2</Text></Col>
      <Col size={1/3} small={1/2}><Text>1/3 | small 1/2</Text></Col>
      <Col size={1/3} small={1/2}><Text>1/3 | small 1/2</Text></Col>
      <Col size={1/3} small={1}><Text>1/3 | small 1</Text></Col>
      <Col medium={1/2}><Text>1 | medium 1/2</Text></Col>
      <Col medium={1/2}><Text>1 | medium 1/2</Text></Col>
    </Grid>
  ))
