import React, {Component } from 'react';
class Header extends Component {
	render(){
		return(
			<div>
			<h1>{ this.props.headerProp}
			</h1>
			<a href="">Dashboard</a> <a href="">Trainer</a>
			</div>);
	}
}

export default Header;