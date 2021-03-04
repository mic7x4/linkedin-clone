import React from 'react';
import './App.css';
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
      </div>
        {/* Slider */}
        {/* Feed */}
        {/* Widgets */}
      {/* Footer */}
    </div>
  );
}

export default App;
