import React from 'react';
import {userAPI} from './../../api/API';
import {connect} from "react-redux";
import Users from './Users';
import * as  axios from 'axios';
import {follow, tolefoloving, unfollow, setcurrentpage, settotaluserCount,  getUsers} from './../../redux/users-reducer';
import {compose} from 'redux';
import  Preload from  './../common/Load/Preload';
 class api extends React.Component {

	 
		 
		
			componentDidMount(){
				
				this.props.getUsers(this.props.currentpage,this.props.pageSize)
				
				/*
			this.props.setinprogres(true);
			
			userAPI.getuzers(this.props.currentpage,this.props.pageSize).then(data =>{
			
			
			this.props.setinprogres(false);
			this.props.setUsers(data.items)
			this.props.settotaluserCount(data.totalCount)
			
			
			
		});*/
		
				}
		
	
		
	 onChangehandler =(pageNamber)=>{
		 this.props.getUsers(pageNamber,this.props.pageSize)
		 
		/*this.props.setcurrentpage(pageNamber)
		
				this.props.setinprogres(true);
				userAPI.getuzers(pageNamber,this.props.pageSize).then(data =>{
			
			this.props.setinprogres(false);
			this.props.setUsers(data.items)
			
			
		});*/
		
	}
	

	 
	 render(){
		 let pagecout = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
		 let page=[];
		for (let i = 1; i<= pagecout; i++){
			page.push(i)
			
		}
			
		return <>
		{this.props.inprogres ? <Preload />:null}
		<Users  
		totalUsersCount ={this.props.totalUsersCount} 
		pageSize ={this.props.pageSize} currentpage = {this.props.currentpage}
		onChangehandler ={this.onChangehandler}
		users = {this.props.users}
		unfollow = {this.props.unfollow}
		follow = {this.props.follow}
		folovinginpr ={this.props.folovinginpr}
		inprogres = {this.props.inprogres}
		tolefoloving = {this.props.tolefoloving}
		
		/>
		</>
	 }
	
 }


let mapStatetoprops = (state)=>{
	return{
		users: state.usersPage.users,
		pageSize:state.usersPage.pageSize,
		totalUsersCount:state.usersPage.totalUsersCount,
		currentpage:state.usersPage.currentpage,
		inprogres:state.usersPage.inprogres,
		folovinginpr:state.usersPage.folovinginpr,
		
	}
	
}

	




export default compose(

connect(mapStatetoprops, {follow,
unfollow, 
setcurrentpage,
tolefoloving,
getUsers,
})


)
(api)




		
		
		
		
		
		
		
	