import React from 'react';

export default function ReviewCard({ review }) {
  return (
    <div className='review-card'>
      <div className='review'>{review.review}</div>
      <div className='date'>
        {new Date(review.dateCreated).toLocaleDateString()}
      </div>
    </div>
  );
}
