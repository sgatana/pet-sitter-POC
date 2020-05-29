import React from 'react';
import './search-sitter.styles.css';

export default function SearchSitter({ onSearch }) {
  return (
    <div className='search-container'>
      <p className='search-header-text'>Search for Sitters in Your Area</p>
      <div className='search-form'>
        <div className='form-group'>
          <label htmlFor='zip'>Zip Code:</label>
          <input className='text-field' type='text' id='zip' name='zip' />
        </div>
        <div className='form-group'>
          <label htmlFor='zip'>Miles:</label>
          <input className='text-field' type='text' id='zip' name='zip' />
        </div>
        <div className='form-group'>
          <button className='btn-primary' onClick={() => onSearch()}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
