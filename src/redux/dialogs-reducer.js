const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Yuriy', },
    { id: 2, name: 'Marina', },
    { id: 3, name: 'Dimasik', },
    { id: 4, name: 'Valera', },
    { id: 5, name: 'Ivan', }
  ],
  messagesData: [
    { id: 1, message: 'Hello!', },
    { id: 2, message: 'How are you?', },
    { id: 3, message: 'YO man!', },
  ],

  newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {

  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.newMessageBody = '';
    state.messagesData.push({ id: 4, message: body })
  }

  return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;

// to switch-case!