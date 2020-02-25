import React, { Component } from 'react';
import {connect} from 'react-redux';


class  AppState extends Component {


  render(){
  return (
    <div className="AppState">
        <p>this is coming from App State Component</p>
            <h2>{JSON.stringify(this.props.reduxState)}</h2>
            <h2>this is second reducer{this.props.reduxState.secondReducer}</h2>
            <h2>this is periodicTable: {this.props.reduxState.periodicTable.type}</h2>
            <h2>this is fourth Reducer: {this.props.reduxState.fourthReducer}</h2>
    </div>
    );
  }
}

const putReduxStateOnProps = (reduxState)=>({
    reduxState
})

export default connect(putReduxStateOnProps)(AppState);