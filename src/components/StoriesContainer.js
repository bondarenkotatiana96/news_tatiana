import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from './Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll;
  const [storyIds, setStoryIds] = useState([]); //storyIds is initialized as an empty array

  useEffect(() => {
    //updating storyIds
    getStoryIds()
      .then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
        <StoriesContainerWrapper>
          <h1>Top News</h1>
            {storyIds.slice(0, count).map(storyId => (
              <Story storyId={storyId} key={storyId} />)
            )}
        </StoriesContainerWrapper>
    </>
  )
};
