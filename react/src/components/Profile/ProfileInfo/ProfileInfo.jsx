import React from 'react';
import s from './ProfileInfo.module.css';
import Preload from './../../common/Load/Preload';
import userfoto from './../../../asets/images/user.png'; 
import {NavLink} from "react-router-dom";
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
	if (!props.profile){
		return <Preload />
		
	}
	
	{const link = props.profile.contacts.instagram}
	
		
	
	
	
    return (
	
	<div>
	
			<div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
		
				
            </div>
			
		
	
        <div className={s.container_profinfo}>
            <img src = {props.profile.photos.large ? props.profile.photos.large: userfoto} className={s.profiphoto} />
            <div className={s.descriptionBlock}>
				<ProfileStatus  status={'уря'}/>
				<i class="fa fa-address-card"></i> {props.profile.aboutMe}
				
				{props.profile.lookingForAJob ? <div> <i class="fa fa-briefcase"></i>Работа: Ищу работу</div> :<div><i class="fa fa-briefcase"></i>Работа: Не ищу</div>  }
				<div><i class="fa fa-info"></i> Имя: {props.profile.fullName}</div>
				<div><i class="fa fa-vk"></i> В контакте: {props.profile.contacts.vk !=null  ? <a target="_blank" href = {"https://" + props.profile.contacts.vk} >{props.profile.fullName}</a>: "нет"}  </div>
				<div><i class="fa fa-edit"></i>Описание : {props.profile.lookingForAJobDescription}</div>
				<div><i class="fa fa-instagram"></i> Instagram:  {props.profile.contacts.instagram !=null  ?<a target="_blank" href = {"https://" + props.profile.contacts.instagram} >{props.profile.fullName}</a>: "нет"}  </div>
					
				
                
            </div>
        </div>
		
	</div>
 )
	
	
	 
}

export default ProfileInfo;


