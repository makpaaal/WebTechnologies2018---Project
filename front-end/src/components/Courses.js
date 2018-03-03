import React, { Component } from 'react';
import '../styles/Courses.css'

class Courses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
      srch: "",
    };
}
searchCourse = (event) => {
  this.setState({
      srch: event.target.value
    }); 
}

showDetails = (event) => {
  var idtoShow = event.target.id;
    document.getElementById("detailField").value = this.props.courses[idtoShow].description;
}


  render() {

    let fil = this.props.courses.filter(
      (item)=>{
          return item.name.toLowerCase().indexOf(this.state.srch.toLowerCase())!==-1;
        }
     );

    return (
      <div>
      <input type="text" value={this.state.srch} placeholder = "Search:" ref="search" onChange={this.searchCourse}/>
      <input type = "text" id = "detailField" size = "143" placeholder = "Click the course to see description..."/>
      <table align = "center" border = "1" width = "800pt" > 
      <tr className = "fieldName">
                  <td>Course Name</td>
                  <td>Number of Students</td>
                  <td>Price(in tenge)</td>
                  <td>Apply</td>
                  </tr> 
               {fil.map((j,i)=>{
                return(                
                  <tr>
                    <td id = {i} onClick = {this.showDetails}>{j.name}</td>
                    <td id = {i}>{j.numOfStudents}</td>
                    <td id = {i}>{j.newPrice}</td>
                    <td><button value = "Appy">Apply</button></td>
                  </tr>              
                )})}
      </table>
      </div>
    	
    	);
    }
 }
export default Courses;
