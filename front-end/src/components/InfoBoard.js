import React, { Component } from 'react';
import '../styles/InfoBoard.css'

class InfoBoard extends Component {


  render() {

     let fil = this.props.courses.filter(
      (item)=>{
          return item.numOfStudents > 40;
        }
     );
     
    return (

        <table className = "InfoBoard" align = "center" border = "1">
        <tr>
                {fil.map((j,i)=>{
                if (i<3)
                return(
                    <td className = "InfoBoardItem" id = {i} ><h1>{j.name}</h1> <h3>{j.numOfStudents} students</h3></td>          
                )
                })}
        </tr>
        <tr>
        {fil.map((j,i)=>{
                if (i>=3)
                return(
                    <td className = "InfoBoardItem" id = {i} ><h1>{j.name}</h1> <h3>{j.numOfStudents} students</h3></td>          
                )
                })}
        </tr>  
               
          </table>

   

    	
    	);
    }
 }
export default InfoBoard;