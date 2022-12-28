import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News';
import Music from './components/Music/Music';
import Login from './components/Login/Login';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />

      {/* <Navbar friends={props.state.friendsPage.friends} /> */}
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile" element={<ProfileContainer/>} />
          <Route path="/profile/:userId" element={<ProfileContainer/>} />
          <Route path="/messages/*" element={<DialogsContainer />} />
          <Route path="/users/" element={<UsersContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
