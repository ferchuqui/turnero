import React, { Component } from 'react'

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turns: []
    };
  }
  componentDidMount() {
    setInterval(() => {
      fetch("https://turner-api.herokuapp.com/turns")
        .then(response => {
          return response.json();
        })
        .then(body => {
          this.setState({ turns: body });
        });
    }, 1000);
  }
  handleClick=(id)=>{
    fetch(`https://turner-api.herokuapp.com/turns/${id}/complete`, {
      method: "put"
    })

  }
  render () {
    return (
      <div>
  <ul>
    {this.state.turns.map((turn)=>{
      return <li key={turn.id}>{turn.id} <a href="#" onClick={()=>{
        this.handleClick(turn.id)
      }}>Completado</a></li>
    })}
  </ul>
      
      </div>
    )
  }
}
export default AdminPage;