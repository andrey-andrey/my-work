import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "./../hoc/withAuthRedirect";
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";





let mapstatetoprops =(state)=>{
	return {
		dialogsPage:state.dialogsPage,
		
		
	}
	
}




let mapdispatchtoprops =(dispatch)=>{
	return {
		sendMessage: ()=>{
			dispatch(sendMessageCreator());
			},
		
		updateNewMessageBody: (body)=>{
			
			dispatch(updateNewMessageBodyCreator(body));
		}
	}
	
}



export default compose (
connect(mapstatetoprops,mapdispatchtoprops),
withAuthRedirect
)(Dialogs);