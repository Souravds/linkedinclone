import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
