
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    dialogPage: {
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
    },

    profilePage: {
      myPosts: [
        { likes: '15', message: 'Hi, how are you' },
        { likes: '26', message: 'My first post' },
        { likes: '1', message: 'I am spiderman!' },
      ],
      newPostText: 'it-kamasutra.com',
    },

    friendsPage: {
      friends: [
        { id: 1, name: 'Anrdew' },
        { id: 1, name: 'Sasha' },
        { id: 1, name: 'Sveta' },
      ]
    }
  },

  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        likes: 300,
        message: this._state.profilePage.newPostText,
      }

      this._state.profilePage.myPosts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogPage.newMessageBody;
      this._state.dialogPage.newMessageBody = ''; 
      this._state.dialogPage.messagesData.push({ id: 4, message: body })
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (txt) => ({ type: UPDATE_NEW_POST_TEXT, newText: txt })

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default store;
window.store = store;