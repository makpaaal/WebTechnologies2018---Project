import React, { Component } from 'react';

class SignInField extends Component {
  render() {
    return (
    	<div>
    	<table>
    	<tr>
    	<td><input type = "text" placeholder = "Email:" size = "80"/></td>
    	</tr>
        <tr>
        <td><input type = "text" placeholder = "Password:" size = "80"/></td>
        </tr>
        <tr>
            <td><input type = "submit" value ="Sign in"/></td>
        </tr>
    	</table>
    	</div>
    	);
    }
 }
export default SignInField;