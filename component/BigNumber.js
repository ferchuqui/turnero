import React, { Component } from "react";

class BigNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 18
    };
  }
  componentDidMount() {
    setInterval(() => {
      fetch("https://turner-api.herokuapp.com/turns")
        .then(response => {
          return response.json();
        })
        .then(body => {
          this.setState({ number: body[0].id });
        });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.number}
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
    );
  }
}
export default BigNumber;
