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

}

export const dialogsReducer = (state = initialState, action) => {

  let stateCopy;

  if (action.type === SEND_MESSAGE) {
    let body = action.newMessageBody;
    return {
      ...state,
      messagesData: [...state.messagesData, { id: 4, message: body }],
    };
  }

  return state;
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE , newMessageBody});

export default dialogsReducer;