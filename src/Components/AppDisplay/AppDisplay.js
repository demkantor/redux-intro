import React, { Component } from 'react';
// import {connect} from 'react-redux';


class  AppDisplay extends Component {


  render(){
  return (
    <div className="AppDisplay">
        <br/>
        <p>this is coming from AppDisplay component</p>
        {JSON.stringify(this.props.periodicTable)}
    </div>
    );
  }
}

export default AppDisplay;