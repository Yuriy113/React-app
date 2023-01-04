import { userAPI, profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  myPosts: [
    { likes: '15', message: 'Hi, how are you' },
    { likes: '26', message: 'My first post' },
    { likes: '1', message: 'I am spiderman!' },
  ],
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        likes: 300,
        message: action.newPostText,
      }
      return {
        ...state,
        myPosts: [...state.myPosts, newPost],
        newPostText: ''
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
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

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
  userAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      // debugger;
      dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
}

export default profileReducer;