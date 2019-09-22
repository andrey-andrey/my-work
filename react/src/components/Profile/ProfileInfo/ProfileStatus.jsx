import React from 'react';

import Preload from './../../common/Load/Preload';
import userfoto from './../../../asets/images/user.png'; 
import {NavLink} from "react-router-dom";


class  ProfileStatus extends React.Component    {
	
	state ={
		editmod: false	
	}
	
	
			
	activataeditmod =()=>{
		
		this.setState({
			editmod: true	
			
		})
		
		
	}
	
	
	deactivataeditmod =()=>{
		this.setState({
			editmod: false	
			
		})
		
		
	}
	render(){

	

    return (
	<div>
	{!this.state.editmod &&
	<div> 
		
		<span onDoubleClick ={this.activataeditmod} >{this.props.status}</span>
	</div>}
	

	{this.state.editmod && <div>
		<input autoFocus = {true} onBlur = {this.deactivataeditmod} value = {this.props.status}/ >
	</div>}
	
	</div>
 )
	
	
	 
}

}
export default ProfileStatus;