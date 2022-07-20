import React, { Profiler } from "react";
import classes from './App.module.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import { Route, Routes } from "react-router-dom";


const App = ({ State, dispatch }) => {
  const { App, App__content } = classes

  return (
    <div className={App}>
      <Header />
      <Navbar
        navbar={State.navbar.navbarList}
        friends={State.navbar.friendsList} />
      <div className={App__content}>
        <Routes>
          <Route
            path="/Profile"
            element={<Profile
              Posts={State.profilePage.myPost}
              dispatch={dispatch}
            />}
          />
          <Route
            path="/Dialogs/*"
            element={<Dialogs
              Names={State.messagesPage.personNames}
              personMessages={State.messagesPage.messageName}
              dispatch={dispatch} />}
          />
          <Route
            path="/News"
            element={<News />} />
          <Route
            path="/Music"
            element={<Music />} />
          <Route
            path="/Settings"
            element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
