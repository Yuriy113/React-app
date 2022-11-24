import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsPageReducer from './friendsPage-reducer';

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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.friendsPage = friendsPageReducer(this._state.friendsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
