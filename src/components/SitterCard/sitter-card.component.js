import React, { useState } from 'react';
import './sitter-card.styles.css';
import Ratings from '../Ratings/ratings.component';
import Reviews from '../Reviews/reviews.component';

export default function SitterCard({ sitter }) {
  const [showReviews, setShowReviews] = useState(false);

  const handleShowReviews = () => {
    setShowReviews(!showReviews);
  };

  const { name, phoneNumber, email, tagline } = sitter;
  return (
    <div className='sitter-container'>
      <div className='sitter-container-info'>
        <div className='card'>
          <Ratings />
          <div onClick={handleShowReviews} className='btn-link'>
            View Reviews +
          </div>
        </div>
        <div className='card' style={{ textAlign: 'center' }}>
          <div className='user-card-info'>
            <h4>{name}</h4>
            <div className='avatar' />
            <p>{tagline}</p>
          </div>
        </div>
        <div className='card'>
          <div className='user-card-details'>
            <p className='btn-link'>Background Check</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
          </div>
        </div>
      </div>
      <Reviews showReviews={showReviews} />
    </div>
  );
}
