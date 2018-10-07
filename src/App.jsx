import React, { Component } from "react";
import NameForm from "./NameForm.jsx";

class App extends Component {
  state = {
    name: "Luiz"
  };

  _getDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    const yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  _setName = ({ target }) => {
    console.log(target);
    this.setState({
      name: target.value
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>
          Hola {name}, hoy es {this._getDate()}
        </h1>
        <NameForm name={name} setName={this._setName} />
      </div>
    );
  }
}

export default App;
