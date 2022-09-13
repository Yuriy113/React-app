import rerenderEntireTree from './../render'

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
  },

  friendsPage: {
    friends: [
      {id: 1, name: 'Anrdew'},
      {id: 1, name: 'Sasha'},
      {id: 1, name: 'Sveta'},
    ]
  }
}

export let addPost = (newPostMessage) => {
  debugger;
  let newPost = {
    likes: 300,
    message: newPostMessage,
  }

  state.profilePage.myPosts.push(newPost);
  rerenderEntireTree(state);
}

export default state;