import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsPageReducer from './friendsPage-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  friendsPage: friendsPageReducer
});

let store = createStore(reducers);

export default store;