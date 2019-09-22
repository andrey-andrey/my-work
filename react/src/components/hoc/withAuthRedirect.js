import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

	let mapStatetopropsRedirect = (state)=>{
	return{
	
		isauth:state.auth.isauth,
	}
}


export const withAuthRedirect = (Component) =>{
	class RedirectComponent extends React.Component {
		render() {
				if (!this.props.isauth) return <Redirect  to ={'/login'}/>
				
				 return <Component {...this.props}/>
		}
		
		
	}
	
	


 let ConectedauthRedirectComponent = connect (mapStatetopropsRedirect) (RedirectComponent);
	


	
	
	
	 return ConectedauthRedirectComponent;
}