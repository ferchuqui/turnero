import React, { Component } from 'react'
import BigNumber from '../component/BigNumber.js'

class Home extends Component {
  render () {
    return (
      <div>
        <BigNumber/>

        <style global jsx>{`
          body {
            margin:0;
            padding: 0;
          }
        `}</style>
      </div>
    )
  }
}


export default Home