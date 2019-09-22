import {userAPI} from './../api/API';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGLE_IN_PROGRES = 'TOGLE_IN_PROGRES'
const TOGLE_IS_FOLOVING = 'TOGLE_IS_FOLOVING'
let initialState = {
    users: [
	
    ],
	pageSize:20,
	totalUsersCount:0,
	currentpage:2,
	inprogres: true,
	folovinginpr:[],
	
   
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
		case FOLLOW:
		return {
			... state, 
		users:state.users.map(u => {
			if (u.id === action.userid){
				
				return {...u, folowed:true }
			}
			return u;
		
			
		})
		
		}
		
		
		case UNFOLLOW:
		return {
			... state, 
		users:state.users.map(u => {
			if (u.id === action.userid){
				
				return {...u, folowed:false }
			}
			return u;
		
			
		})
		
		}
		
		case SET_USERS:{
		return {...state, users:action.users}
		//return {...state, users: [...state.users, ...action.users]}
           
		}
		
		case SET_CURENT_PAGE:{
		
		return {...state, currentpage:action.currentpage}
           
		}
		
		case SET_TOTAL_USERS_COUNT:{
		return {...state, totalUsersCount:action.totaluserscount}
           
		}
		
		case TOGLE_IN_PROGRES:{
		return {...state, inprogres:action.inprogres}
           
		}
		
		
		
		
		
		case TOGLE_IS_FOLOVING:{
		return {...state,
		folovinginpr:action.inprogres 
		? [...state.folovinginpr, action.userid]
		:state.folovinginpr.filter(id=> id != action.userid)
		
		}
		}
        default:
            return state;
    }
}


export const followsucces = (userid) => ({type: FOLLOW, userid})
export const unfollowsucces = (userid) =>({type: UNFOLLOW,userid })
export const setUsers = (users) =>({type: SET_USERS, users })
export const setcurrentpage = (currentpage) =>({type: SET_CURENT_PAGE, currentpage })
export const settotaluserCount = (totaluserscount) =>({type: SET_TOTAL_USERS_COUNT, totaluserscount })
export const setinprogres = (inprogres) =>({type: TOGLE_IN_PROGRES, inprogres })
export const tolefoloving = (inprogres,userid) =>({type: TOGLE_IS_FOLOVING, inprogres, userid })


export const getUsers = (currentpage, pageSize)=> {
	return (dispatch) =>{
	
	dispatch(setinprogres(true));
			
			userAPI.getuzers(currentpage, pageSize).then(data =>{
			
			dispatch(setcurrentpage(currentpage));
			dispatch(setinprogres(false));
			dispatch(setUsers(data.items));
			dispatch(settotaluserCount(data.totalCount));
			
			
			
		})
	
}
}

export const follow = (userid)=> {
	return (dispatch) =>{
		
		dispatch(tolefoloving(true, userid));
				userAPI.follow(userid)
			.then(response => {
                                        if (response.data.resultCode == 0) {
                                          dispatch(followsucces(userid));
                                        }
											dispatch(tolefoloving(false,userid));
                                    });
	
	
	
}
}

export const unfollow = (userid)=> {
	return (dispatch) =>{
		
		dispatch(tolefoloving(true, userid));
								userAPI.unfollow(userid)
			.then(response => {
                                        if (response.data.resultCode == 0) {
                                          dispatch(unfollowsucces(userid));
                                        }
											dispatch(tolefoloving(false,userid));
                                    });
	
	
	
}
}



export default usersReducer;