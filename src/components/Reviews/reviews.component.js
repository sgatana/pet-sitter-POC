import React from 'react';
import './reviews.styles.css';
import { generateReviews } from '../../mockData/api';
import Ratings from '../Ratings/ratings.component';
import ReviewCard from './review-card';

export default function Reviews({ showReviews }) {
  const reviews = generateReviews();
  return (
    <div
      className={showReviews ? 'review-section show-reviews' : 'review-section'}
    >
      {reviews.map(review => (
        <div className='review-section-info' key={review.id}>
          <Ratings />
          <div className='review-card'>
            <ReviewCard review={review} />
          </div>
        </div>
      ))}
    </div>
  );
}
