import React, { Component } from 'react';

class SignUpField extends Component {

   constructor(props) {
    super(props);

    this.state = { 
        newFirstName: "",
      newLastName:"",
      newLevel:"",
      newEmail:"",
      newPassword:"",
  }
}


handleFirstNameChange = (e) => {
     this.setState({newFirstName: e.target.value});
};
handleLastNameChange = (e) => {
    this.setState({newLastName: e.target.value});;
};
handleLevelChange = (e) => {
    this.setState({newLevel: e.target.value});
};
handleEmailChange = (e) => {
    this.setState({newEmail: e.target.value});
};
handlePasswordChange = (e) => {
    this.setState({newPassword: e.target.value});
};

handleSignUpSubmit = () => {
    this.props.onSignUpFormSubmit({
      id: this.state.newId,
      firstName: this.state.newFirstName,
      lastName: this.state.newLastName,
      level: this.state.newLevel,
      email: this.state.newEmail,
      password: this.state.newPassword
    });
}; 



  render() {
    
    return (
    	<div height = "440pt">
    	<table>
    	<tr>
    	<td><input type = "text" placeholder = "First Name:" size = "80" onChange = {this.handleFirstNameChange}/></td>
    	</tr>
        <tr>
        <td><input type = "text" placeholder = "Last Lame:" size = "80" onChange = {this.handleLastNameChange}/></td>
        </tr>
         <tr>
        <td><input type = "text" placeholder = "Level:(beginner/ intermediate/ master)" size = "80" onChange = {this.handleLevelChange}/></td>
        </tr>
        <tr>
        <td><input type = "text" placeholder = "Email:" size = "80" onChange = {this.handleEmailChange}/></td>
        </tr>
         <tr>
        <td><input type = "password"  placeholder = "Password:" size = "80" onChange = {this.handlePasswordChange}/></td>
        </tr>
        <tr>
        <td><input type = "submit" value = "Sign up" size = "80" onClick = {this.handleSignUpSubmit}/></td>
        </tr>
    	</table>
    	</div>
    	);
    }
 }
export default SignUpField;