import React from 'react';
import './App.css';
import Feeds from './components/Feeds';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* Body */}
      <div className="app__body">
        <Sidebar/>
        <Feeds/>
        {/* Widgets */}
      {/* Footer */}
      </div>
    </div>
  );
}

export default App;
