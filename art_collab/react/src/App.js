import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideBar from './components/SideBar';
import LogoListScreen from './screens/LogoListScreen';


function App() {

  return (
    <BrowserRouter basename='/'>
    <div className='app-container'>
      <SideBar />
      <div className='screen-container'>
        <LogoListScreen />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
