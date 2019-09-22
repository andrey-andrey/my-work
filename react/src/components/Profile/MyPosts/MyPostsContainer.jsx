import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';


let mapstatetoprops =(state)=>{
	return {
	newPostText:state.profilePage.newPostText,
	posts:state.profilePage.posts
	
		
	}
	
}

let mapdispatchtoprops =(dispatch)=>{
	return {
		
		
		updateNewPostText: (text)=>{
             dispatch(updateNewPostTextActionCreator(text));
			},
				
				
			addPost: ()=> { dispatch(addPostActionCreator());		
			}
			
	}
	
}



const MyPostsContainer = connect(mapstatetoprops,mapdispatchtoprops)(MyPosts);
	
	
export default MyPostsContainer;