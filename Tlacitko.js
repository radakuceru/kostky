import React, { Component } from 'react';
import './Tlacitko.css';

class Tlacitko extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let random = Math.floor((Math.random() * this.props.sides) + 1);
    this.setState({num: random})
    this.props.updateItemsCallback(this.state.num);
  }

  render() {
    return (
      <img onClick={this.handleClick} className="small" src={"./images/" + this.props.name + ".svg"} alt={this.props.name} sides={this.props.sides}/>
    );
  }
}

export default Tlacitko;
