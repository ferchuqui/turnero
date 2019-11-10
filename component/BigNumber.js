import React, { Component } from 'react'

class BigNumber extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 18
    }
  }
  render () {
    return (
      <div>{this.state.number}
      <style jsx>{`

        div {
          height: 100vh;
          background: red;
          font-size: 18rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      </div>
    )
  }
}
export default BigNumber
