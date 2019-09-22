import React from 'react';
import s from './Users.module.css';
import * as  axios from 'axios';
import userfoto from './../../asets/images/user.png'; 
import {NavLink} from "react-router-dom";
import {userAPI} from './../../api/API';
let Users =(props)=>{
	

	 let pagecout = Math.ceil(props.totalUsersCount/props.pageSize)
		 let page=[];
		for (let i = 1; i<= pagecout; i++){
			page.push(i)
			
		}
	
	return <div className={s.users}>
		
	
		
		
		
		
	<div className={s.pagination}>
		{page.map(  (p)=>{ return <span className ={props.currentpage === p && s.selectedPage } onClick ={ (e)=>{props.onChangehandler(p); }}>{p}</span>   }   )}
	</div>	
	
		
			
		
	
	{
		
		
		props.users.map ( u => <div key={u.id} className={s.user}>
			<span>
				<div >
	<NavLink to={"/profile/" + u.id}><img src ={u.photos.small!=null ? u.photos.small:userfoto} className={s.userfoto}/></NavLink>
				</div>
			<div>
			{u.folowed
			? <button disabled ={props.folovinginpr.some(id => id === u.id ) } onClick ={()=> {
				
				props.unfollow(u.id);
				
					


                            }}>Unfollow</button>
			
			
			
	
			
			
			: <button disabled ={props.folovinginpr.some(id => id === u.id )} onClick={() => {
				
					props.follow(u.id);


                            }}>Follow</button>}
				
			</div>
			
			
			</span>
			<span>
				<span>
					<div>{u.name}</div>
					<div>{u.status}</div>
				</span>
				<span>
				<div>{"u.location.citi"}</div>
				<div>{"u.location.country"}</div>
				</span>
			</span>
		</div>)
		
		
	
	}
	</div>
	

}


export default Users;