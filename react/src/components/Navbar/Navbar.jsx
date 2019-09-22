import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <i className="fa fa-home"><NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink></i>
            </div>
            <div className={s.item}>
               <i className="fa fa-comment"><NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink></i>
            </div>
			<div className={s.item}>
               <i className="fa fa-user"><NavLink to="/users" activeClassName={s.activeLink}>Юзеры</NavLink></i>
            </div>
			
			
			 <div className={s.item}>
                <i className="fa fa-th-list"><NavLink to="/News" activeClassName={s.activeLink}>Новости</NavLink></i>
            </div>
			 <div className={s.item}>
               <i className="fa fa-user"><NavLink to="/frends" activeClassName={s.activeLink}>Друзья</NavLink></i>
            </div>
			
			 <div className={s.item}>
                <i className="fa fa-users"><NavLink to="/Grup" activeClassName={s.activeLink}>Группы</NavLink></i>
            </div>
           
        </nav>
    )
}

export default Navbar;


