import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Grup from './components/Grup/Grup';
import News from './components/News/News';
import Frends from './components/Frends/Frends';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route} from "react-router-dom";
import Login from './components/Login/Login';




import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";




const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>

                    <Route path='/profile/:usreId?'
                           render={ () => <ProfileContainer /> }/>
						   
					<Route path='/News'
                           render={ () => <News /> }/>
						   
					<Route path='/Frends'
                           render={ () => <Frends /> }/>
						 
					<Route path='/Grup'
                           render={ () => <Grup /> }/>
						   
					<Route path='/users'
                           render={ () => <UsersContainer /> }/>

					<Route path='/login'
                           render={ () => <Login /> }/>	
                </div>
            </div>
        )
}

export default App;