let rerenderEntireTree = () => {
  console.log('state changed');
}

let state = {
  dialogPage: {
    dialogsData : [
      { id: 1, name: 'Yuriy', },
      { id: 2, name: 'Marina', },
      { id: 3, name: 'Dimasik', },
      { id: 4, name: 'Valera', },
      { id: 5, name: 'Ivan', }
    ],
    messagesData : [
      { id: 1, message: 'Hello!', },
      { id: 2, message: 'How are you?', },
      { id: 3, message: 'YO man!', },
    ],
  },

  profilePage: {
    myPosts : [
      { likes: '15', message: 'Hi, how are you' },
      { likes: '26', message: 'My first post' },
      { likes: '1', message: 'I am spiderman!' },
    ],
    newPostText : 'it-kamasutra.com',
  },

  friendsPage: {
    friends: [
      {id: 1, name: 'Anrdew'},
      {id: 1, name: 'Sasha'},
      {id: 1, name: 'Sveta'},
    ]
  }
}

export const addPost = () => {
  let newPost = {
    likes: 300,
    message: state.profilePage.newPostText,
  }

  state.profilePage.myPosts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;