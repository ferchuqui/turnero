import React, { Component } from 'react'
import AdminPage from '../../component/AdminPage'
class Home extends Component {
  render () {
    return (
      <div>
        <AdminPage/>

        <style global jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
          body {
            margin:0;
            padding: 0;
            font-family: 'Roboto', sans-serif;

          }
        `}</style>
      </div>
    )
  }
}


export default Home