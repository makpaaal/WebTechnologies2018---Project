import React, { Component } from 'react';
import '../styles/SalesList.css'

class SalesList extends Component {


  render() {

    let fil = this.props.courses.filter(
      (item)=>{
          return item.oldPrice != item.newPrice;
        }
     );

    return (

        <table className = "SalesTable" border = "1" >  
        <tr>
               {fil.map((j,i)=>{
                return(
                    <td>
                    <td className = "SaleItem" id = {i} ><h1>{j.name}</h1> <h3>Old Price:{j.oldPrice}</h3><h3>New Price:{j.newPrice}</h3></td>     
                    <td><button value = "Appy">Apply now</button></td>  
                    </td>
                )})}
               
        </tr>
          </table>
    	);
    }
 }
export default SalesList;
