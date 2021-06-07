import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class StricAccess extends Component {
  render(){
    const {user} = this.props
    if(user.username === 'joao' && user.password === '1234') {
      return(
        <p> welcome joao! </p>
      );
        }
        return(
      <div>
        { alert('Access denied') }
        <Redirect to='/' /> 
      </div>
    );
  }
}

export default StricAccess;