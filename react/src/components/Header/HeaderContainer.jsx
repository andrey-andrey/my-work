import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Header from './Header';
import * as  axios from 'axios';
import {connect} from "react-redux";
import {getAuthuserdada} from './../../redux/auth-reduser';
import {authAPI} from './../../api/API';

class HeaderContainer extends React.Component {
	
		componentDidMount(){
		this.props.getAuthuserdada();
		
				}
	
	
	
	render (){
    return <Header {...this.props} />
	}
}

let mapStatetoprops = (state)=>{
	return{
		isauth: state.auth.isauth,
		login: state.auth.login,
		
	}
}

export default connect(mapStatetoprops,{getAuthuserdada}) (HeaderContainer);