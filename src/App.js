import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';

// const App = (props) => {
const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      
      {/* <Navbar friends={props.state.friendsPage.friends} /> */}
      <Navbar/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/messages/*" element={<DialogsContainer />} />
          <Route path="/users/" element={<div>users</div>} />

          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
