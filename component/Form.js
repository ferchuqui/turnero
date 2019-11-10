import React, { Component } from 'react';

class Form extends Component {
  state = { name: '' }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.name)
    console.log(this.state.DNI)
  }
  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleDNIChange = (e) => {
    this.setState({DNI: e.target.value})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Reserva tu turno</h1>
        <h2>Completa tus datos y nosotros te avisaremos</h2>
        <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} placeholder="Enter your Name" />
        <input type="number" name="dni" value={this.state.dni} onChange={this.handleDNIChange}placeholder="Enter your DNI" />
        <input type="submit" />
        <style jsx>{`
        
          form {
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background: #b3d4ff;
          }
          h1,h2 {
            text-align: center;
          }
          input[type="text"], input[type="number"] {
            font-size: 22px;
            border: 0;
            margin: 10px;
            padding-left: 15px;
            padding: 10px;
          }
          input[type="submit"] {
            border: 0;
            background: #7db395;
            color: white;
            padding: 15px;
            font-weight: bold;
            font-size: 20px;
          }
        `}</style>
      </form>
    );
  }
}
export default Form;
