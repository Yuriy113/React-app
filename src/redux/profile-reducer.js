const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  myPosts: [
    { likes: '15', message: 'Hi, how are you' },
    { likes: '26', message: 'My first post' },
    { likes: '1', message: 'I am spiderman!' },
  ],
  newPostText: 'it-kamasutra.com',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        likes: 300,
        message: state.newPostText,
      }
      return {
        ...state,
        myPosts: [...state.myPosts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }


    default:
      return state;
  }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (txt) => ({ type: UPDATE_NEW_POST_TEXT, newText: txt })
export const  setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;