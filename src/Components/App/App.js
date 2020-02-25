import React, { Component } from 'react';
import {connect} from 'react-redux';
import AppDisplay from '../AppDisplay/AppDisplay';
import './App.css'
import AppState from '../AppState/AppState';


class  App extends Component {

  state={
    periodicTable: ['oxygen'],
    newElement: ''
  }

  componentDidMount() {
    console.log('page loaded');
    // this.displayToDOM();
  }

  handleClick1=()=>{
    this.props.dispatch({
      type: 'BUTTON_ONE'
    })
  }
  handleClick2=()=>{
    this.props.dispatch({
      type: 'BUTTON_TWO'
    })
  }

  handleClick3=()=>{
    this.props.dispatch({
      type: 'BUTTON_THREE'
    })
  }

  handleChange = (event)=>{
    console.log(event.target.value);
   this.setState({
     newElement: event.target.value
   })
  }

  addElement=()=>{
    this.props.dispatch({
      type: 'ADD_ELEMENT',
      payload: this.state.newElement
    })
    this.displayToDOM()
  }

  addDis=()=>{
    this.props.dispatch({
      type: 'BUTTON_FOUR',
      payload: this.state.newElement
    })
    this.displayToDOM()
  }

  displayToDOM = ()=>{
    console.log('loaded!');
    this.setState({
      periodicTable: [...this.state.periodicTable, this.state.newElement]
    })
  }

  render(){
  return (
    <div className="App">
        <h1>App.js
        </h1>
        <button onClick={this.handleClick1}>Button 1</button>
        <button onClick={this.handleClick2}>Button 2</button>
        <button onClick={this.handleClick3}>Button 3</button>
        <br/>
        <button onClick={this.addElement}>Add Element</button>
        <input onChange={this.handleChange} placeholder="pick your favorite element"></input>
        <button onClick={this.addDis}>Add Element but in a new way!</button>
        <br/>
        <p>this is coming from App component</p>
      {JSON.stringify(this.state.periodicTable)}
      <AppDisplay periodicTable={this.state.periodicTable} />
      <br/>
      <AppState />
    </div>
    );
  }
}

export default connect()(App);
