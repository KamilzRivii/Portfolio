import React from 'react';
import './App.css';
import "./i18n";
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ContentHome from './components/ContentHome';
import ContentPortfolio from './components/ContentPortfolio';
import ContentAbout from './components/ContentAbout';
import ContentResume from './components/ContentResume';
import ContentContact from './components/ContentContact';

function App() {
  return (
    <div className="app-container bg-app-bg bg-center bg-no-repeat">
      <Sidebar />
      <div className="main-container">
        <Topbar />
          <ContentHome />
          <ContentPortfolio />
          <ContentAbout />
          <ContentResume />
          <ContentContact />
      </div>
    </div>
  );
}

export default App;
