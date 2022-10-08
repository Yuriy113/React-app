import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar friends={props.state.friendsPage.friends}/>
      <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" element={<Profile 
              myPosts={props.state.profilePage.myPosts} 
              addPost={props.addPost} 
              newPostText = {props.state.profilePage.newPostText} 
              updatePostText = {props.updatePostText} />} />
            <Route path="/messages/*" element={<Dialogs dialogsData={props.state.dialogPage.dialogsData} messagesData={props.state.dialogPage.messagesData}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
      </div>

    </div>
  );
}

export default App;
