import React from 'react'
import { Link } from 'found'

export default class Test extends React.Component {
  render () {
    return (
      <div>
        Test
      <Link to='/'> go back </Link>
      </div>
    )
  }
}