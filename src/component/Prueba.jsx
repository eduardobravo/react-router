import React, { Component } from 'react';
class Prueba extends Component {
  state = {  }
  handleClick = () =>{
    const {history} = this.props

    history.push('/Invoices')
  }
  render() {
    return (
      <div onClick={this.handleClick}>
      <h1>Prueba</h1>
      </div>
    );
  }
}

export default Prueba;