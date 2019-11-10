import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form><h1>Reserva tu turno</h1>
      <h2>Completa tus datos y nosotros te avisaremos</h2>
        <input type="text" name="name" placeholder="Enter your Name" />
        <input type="number" name="dni" placeholder="Enter your DNI" />

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
