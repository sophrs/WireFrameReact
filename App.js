import React, {Component } from 'react';
import Header from './header.js'
import Table from './table.js'

import './traineeschedule.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      header: "Logo"
    }
  }

  render(){
    return(
      <div>
      <Header headerProp={this.state.header} />
     <div class = "container"> <h2> COURSE TIMETABLE</h2>
      <div class="pagecontent"><Table/></div>
    
    </div></div>);

  }
}
export default App; 