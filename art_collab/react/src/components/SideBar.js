import React, { useState } from 'react';


function SideBar() {
  const [ sidebarToggle, setSidebarToggle ] = useState(false);
  const toggleMenu = () => {
    if(sidebarToggle) {
      document.querySelector('.sidebar-container').classList.remove('expand');
      document.querySelector('.sidebar-content').classList.remove('show');
      setSidebarToggle(false);
    } else {
      document.querySelector('.sidebar-container').classList.add('expand');
      document.querySelector('.sidebar-content').classList.add('show');
      setSidebarToggle(true);
    };
  };

  return(
    <aside className='sidebar-container'>
      <div className='sidebar-content'>
        <h3>Links</h3>
        <ul>
          <li>
            <a href='{% url "home" %}'>Home</a>
          </li>
          <li>
            <a href='{% url "login" %}'>Log In</a>
          </li>
        </ul>
      </div>
      <button className='sidebar-button' onClick={ toggleMenu }>
        { sidebarToggle ? '<' : '>' }
      </button>
    </aside>
  );
};

export default SideBar;
