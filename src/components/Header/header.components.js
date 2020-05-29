import React from 'react';
import './header.styles.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='logo' />
        <div className='user-account-info'>
          <span className='avatar' />
          <p className='username'>Stephen</p>
        </div>
      </div>
    </div>
  );
}
