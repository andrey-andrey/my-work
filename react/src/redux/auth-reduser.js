import {authAPI} from './../api/API';
const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
   
	email:null,
	login:null,
	id:null,
	inprogres: false,
	isauth:false,
	
   
};

const authreduser = (state = initialState, action) => {

    switch(action.type) {
		case SET_USER_DATA:
		
		return {
			... state, 
			...action.data,
			isauth:true
		
		
		}
		
		
		
		
		
		
		
		
		
		
        default:
            return state;
    }
}


export const setuserdata = (email,login,id) => ({type: SET_USER_DATA, data:{email,login,id}})

export  const getAuthuserdada = () =>(dispatch)=>{
	
	
	authAPI.me()
				.then(response =>{
						
						if (response.data.resultCode===0){
							let {email,login,id} = response.data.data;
							dispatch (setuserdata(email, login,id));
						}
		});
	
	
	
	
	
}


export default authreduser;