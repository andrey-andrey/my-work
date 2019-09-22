import React from 'react';
import {withAuthRedirect} from "./../hoc/withAuthRedirect";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from './Profile';
import {getuserProfile,} from './../../redux/profile-reducer';
import * as  axios from 'axios';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {userAPI} from './../../api/API';
import {Redirect} from "react-router-dom";
import {compose} from 'redux';


class ProfileContainer extends React.Component{
		
		componentDidMount(){
			let usreId = this.props.match.params.usreId;
			if (!usreId){
			usreId = 1481;	
			}
		
		
		this.props.getuserProfile(usreId);
		
	
		
		
		
		
				}
	render(){
		{/*if(this.props.isauth === false) return <Redirect  to ={'/login'}/>;*/}
	
		
    return (
      
            <Profile {...this.props} profile = {this.props.profile}/>
		
          
       
    )
}

}

let mapStatetoprops = (state)=>{
	return{
		profile: state.profilePage.profile,
	
	}
}

export default compose (
connect(mapStatetoprops,{getuserProfile}),

withRouter,
withAuthRedirect)(ProfileContainer)












