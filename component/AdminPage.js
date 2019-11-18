import React, { Component } from "react";
import Head from "next/head";

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
    }, 100);
  }
  handleClick = id => {
    fetch(`https://turner-api.herokuapp.com/turns/${id}/complete`, {
      method: "put"
    });
  };
  render() {
    return (
      <div className="container">
        <style jsx>{`
          .container {
            background-color: blue;
            display: flex;
            height: 100vh;
            width: 100vw;
            text-align: center;
          }
          .interno {
            height: 60vh;
            width: 60vw;
            background: green;
            margin: auto;
          }
          ul {
            font-size: 18px;
            color: red;
            margin: 10px;
          }
          li {
            list-style: none;
            
          }
        `}</style>
        <div className="interno">
          <Head>
            <script
              src="https://kit.fontawesome.com/c425ef4bc2.js"
              crossorigin="anonymous"
            ></script>
          </Head>

          <ul>
            {this.state.turns.map(turn => {
              return (
                <li key={turn.id}>
                  <i className="fas fa-envelope-open"></i>
                  {turn.id}{" "}
                  <a
                    href="#"
                    onClick={() => {
                      this.handleClick(turn.id);
                    }}
                  >
                    Completado
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default AdminPage;
