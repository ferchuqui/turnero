import React, { Component } from 'react'
import BigNumber from '../component/BigNumber.js'
import Form from '../component/Form'

// medicospitufo.com.ar/ -> pages/index.js
// medicospitufo.com.ar/bigNumber -> pages/bigNumber/index.js 
// medicospitufo.com.ar/adminPage -> pages/adminPage/index.js

class Home extends Component {
  render () {
    return (
      <div>
        <Form/>

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