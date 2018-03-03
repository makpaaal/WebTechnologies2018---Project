import React, { Component } from 'react';
import SalesList from './SalesList'
import InfoBoard from'./InfoBoard'


class Home extends Component {

  render() {
       return (
       	<div>
    	<SalesList courses = {this.props.courses}></SalesList>
    	<InfoBoard courses = {this.props.courses}></InfoBoard>
    	</div>
    	);
    }
}
export default Home;
