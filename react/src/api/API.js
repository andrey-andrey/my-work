import * as  axios from 'axios';



const instance =axios.create({
 withCredentials:true,
 baseURL:'https://social-network.samuraijs.com/api/1.0/',
headers: {
"API-KEY": "fccd3fb9-0585-44d6-8a27-f0a2f581f1ca"
} 
	
});

export const userAPI = {
	
	
getuzers (currentpage,pageSize )
 {

 return instance.get(`users?page=${currentpage}&count=${pageSize}`).then(response =>response.data )

 },
 
 follow (userid){
	 
	 return instance.post(`follow/${userid}`)
	 
	 
 },
	
	 unfollow (userid){
		 
		 
		return instance.delete(`follow/${userid}`)
		
		
	 
 },
 
 getprofile(usreId){
 
 		 return instance.get(`profile/`+usreId);
			
			
			
		}
 
 
 }
 
 
 
 export const authAPI = {
	
	me(){
		
	return instance.get(`auth/me`,)	
		
	}
	

 
 
 }
	
	
	



