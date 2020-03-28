import React, { Component } from 'react';

import './Header.css';

class Layout extends Component {
  render() {
    return (
      <div className='body'>
        <header className='header'>
          <a href='/' className='logo'>
            <span className='logo-name'>★𝒩𝒾𝓉𝒾𝓃 𝒮❀𝓁𝒶𝓃𝓀𝒾★</span>
          </a>
          <input className='menu-btn' type='checkbox' id='menu-btn' />
          <label className='menu-icon' htmlFor='menu-btn'>
            <span className='navicon'></span>
          </label>
          <ul className='menu'>
            <li>
              <a href='#About'>About</a>
            </li>
            <li>
              <a href='#Contact'>Contact</a>
            </li>
            <li>
              <a href='#Educaation'>Educaation</a>
            </li>

            <li>
              <a href='#Skill'>Skill</a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
export default Layout;
