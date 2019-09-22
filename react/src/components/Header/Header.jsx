import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
		
		<div className ={s.loginblock}>	
			{props.isauth ? props.login :
			<NavLink to={'/login'}>Авторизация</NavLink>}
		</div>
    </header>
}


export default Header;