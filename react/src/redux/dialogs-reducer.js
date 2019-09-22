const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'hello'},
        {id: 2, message: 'World'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
	
	
	//let statecopy ;

   switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
			return{...state,newMessageBody:action.body};
	   
           //statecopy.newMessageBody = action.body;
           //return statecopy; без переменной сразу создаем и возвращаем
		   
		   
       case SEND_MESSAGE:
	    let body = state.newMessageBody;
	   
			return{
		...state, newMessageBody:'',//зануляем
		
		messages: [...state.messages,{id: 6, message: body}] //добавляем
		};
			
          
          // statecopy.newMessageBody = '';
           //statecopy.messages.push({id: 6, message: body});
           //return statecopy;
       default:
           return state;
   }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;