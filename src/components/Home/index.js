import React, { useState } from 'react';
import SearchSitter from '../SearchSitter/search-sitter.component';
import SitterCard from '../SitterCard/sitter-card.component';
import InfiniteScroll from 'react-infinite-scroll-component';
import { generateSitters } from '../../mockData/api';

export default function Home() {
  const [sitters, fetchSitters] = useState(generateSitters());
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleLoadMore = () => {
    fetchSitters([...sitters, ...generateSitters()]);
  };

  return (
    <div className='home-container'>
      <SearchSitter onSearch={handleSearch} />
      {isSearching ? (
        <div className='sitter-list' id='scrollableDiv'>
          <InfiniteScroll
            dataLength={sitters.length}
            hasMore={sitters.length <= 50}
            next={handleLoadMore}
            scrollableTarget='scrollableDiv'
          >
            {sitters.map(sitter => {
              return <SitterCard key={sitter.id} sitter={sitter} />;
            })}
          </InfiniteScroll>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px',
          }}
        >
          Please enter zip code and distance then click search to load sitters
        </div>
      )}
    </div>
  );
}
