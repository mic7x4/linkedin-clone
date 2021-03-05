import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feeds from './components/Feeds';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="app">
      <Header/>

      {!user?(<Login/>):(
      <div className="app__body">
        <Sidebar/>
        <Feeds/>
      </div>
      )}
    </div>
  );
}

export default App;
