import React, { Component, Link } from 'react';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='mdl-layout__header'>
        <div className='mdl-layout__header-row'>
          <span className='mdl-layout-title'>Report</span>
        </div>
      </header>
    );
  }
}
