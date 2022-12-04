import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsPageReducer from './friendsPage-reducer';
import usersReducer from './users-reducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  friendsPage: friendsPageReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;