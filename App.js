import React, { Component } from 'react';
import './App.css';
import Tlacitko from './Components/Tlacitko';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "Klikněte!",
    };
    this.updateItems = this.updateItems.bind(this);
  }

  updateItems(NewNum) {
    this.setState({num: NewNum});
  }
   
  render() {
    return (
      <div className="App">
        <h1>Click a dice to roll</h1>
        <div className="row">
          <Tlacitko name="d4" sides="4" updateItemsCallback={this.updateItems}/>
          <Tlacitko name="perspective-dice-five" sides="5" updateItemsCallback={this.updateItems}/>
          <Tlacitko name="dice-eight-faces-eight" sides="8" updateItemsCallback={this.updateItems}/>
          <Tlacitko name="d10" sides="10" updateItemsCallback={this.updateItems}/>
          <Tlacitko name="d12" sides="12" updateItemsCallback={this.updateItems}/>
          <Tlacitko name="dice-twenty-faces-twenty" sides="20" updateItemsCallback={this.updateItems}/>
        </div>
        <div>
          <h1>{this.state.num}</h1>
        </div>
      </div>
    );
  }
}

export default App;
