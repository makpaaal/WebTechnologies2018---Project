import React, { Component } from 'react';
import HeaderPart from './HeaderPart';
import FooterPart from './FooterPart';


class MainBoard extends Component {
  render() {
    return (
      <div >
          <HeaderPart></HeaderPart>
          <FooterPart></FooterPart>
      </div>
    );
  }
}

export default MainBoard;
