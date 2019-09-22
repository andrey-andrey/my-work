import {userAPI} from './../api/API';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'react', likesCount: 1},
        {id: 2, message: 'post', likesCount: 2},
        {id: 3, message: 'yo', likesCount: 3},
        {id: 4, message: 'Nice', likesCount: 4}
    ],
    newPostText: '',
	profile:null
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:{
            let newPost = {
                id: 11,
                message: state.newPostText,
                likesCount: 0
            };  
			return{...state,
			posts:[...state.posts,newPost],
			newPostText: ''
			
			};
			
			
            
		}
			
        case UPDATE_NEW_POST_TEXT:
		
		
		return{
			...state,
			newPostText:action.newText 
		};
           
		   
		 case SET_USER_PROFILE:
		
		
		return{
			...state,
			profile:action.profile 
		};   
           
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const setuserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getuserProfile = (usreId) =>(dispatch) =>{
	
		userAPI.getprofile(usreId).then(response =>{		
		dispatch(setuserProfile(response.data));
				});
	
	
} 
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;