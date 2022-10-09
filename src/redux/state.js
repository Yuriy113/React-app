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

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('state changed');
  },

  addPost() {
    let newPost = {
      likes: 300,
      message: this._state.profilePage.newPostText,
    }
  
    this._state.profilePage.myPosts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updatePostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;
window.store = store;