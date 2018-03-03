import React, { Component } from 'react';
import SignUpField from './SignUpField'
import SignInField from './SignInField'


class SignForm extends Component {

	constructor(props) {
    super(props);

    this.state = {
      
      isSignInOpen: false,
    };
}

handleOnSignUpFormSubmit = (student) => {
    this.props.onSignUpFormSubmit(student);
};


  render() {
     if (this.state.isSignInOpen) {
    return (
    	<SignInField ></SignInField>)
       
    }
    else return(
       <SignUpField onSignUpFormSubmit={this.handleOnSignUpFormSubmit}></SignUpField>
    	);
    }
 }
export default SignForm;