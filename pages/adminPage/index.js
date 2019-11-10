import React, { Component } from 'react'
import AdminPage from '../../component/AdminPage'
class Home extends Component {
  render () {
    return (
      <div>
        <AdminPage/>

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