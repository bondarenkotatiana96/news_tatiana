import React, { useEffect, useState, memo } from 'react';
import { getStory } from '../services/hnApi';
import { StoryWrapper, StoryTitle, StoryDetails, StoryMetaElement } from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';
import StoryComments from './StoryComments';
import localStorage from 'local-storage';
let bookmarkedStories = JSON.parse(localStorage.get('bookmarkedStories')) || [];


export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});
  const [isBookmarked, setBookmark] = useState(false);
  const [isCommentsOpen, setComments] = useState(false);
  
  useEffect(() => {
    getStory(storyId)
      .then(data => data && data.url && setStory(data));
  }, []);

  const toggleBookmark = (storyId) => {
    
    setBookmark(!isBookmarked);

    if (!isBookmarked) {
      bookmarkedStories = [...bookmarkedStories, {id: storyId, bookmark: true}];
      localStorage.set('bookmarkedStories', JSON.stringify(bookmarkedStories));
    } else {
      let removeIndex = bookmarkedStories.map(function(item) { return item.id; }).indexOf(storyId)
      bookmarkedStories.splice(removeIndex, 1);
      localStorage.set('bookmarkedStories', JSON.stringify(bookmarkedStories));
    }
  };

  const toggleComments = (storyId) => {
    
    setComments(!isCommentsOpen);
  };

  return story && story.url ? (
    <React.Fragment>
    <StoryWrapper>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
        <i 
          onClick={() => {
            toggleBookmark(storyId);
          }}
          className={!isBookmarked ? "fas fa-heart" : "far fa-heart"}></i>
      </StoryTitle>

      <StoryDetails>
        <span>
          <StoryMetaElement>By: </StoryMetaElement>{story.by}
        </span>
      </StoryDetails>

      <StoryDetails>
        <span>
          <StoryMetaElement>Posted: </StoryMetaElement>
          {mapTime(story.time)} ago
        </span>
      </StoryDetails>

      <StoryDetails>
        <a href={story.url}>READ MORE</a>
      </StoryDetails>

      <StoryDetails>
        <p 
          onClick={() => {
            toggleComments(storyId);
          }}
        >
          Comments ({story.descendants}) <i className={isCommentsOpen ? "arrow up" : "arrow down"}></i></p>
      </StoryDetails>

    </StoryWrapper>

    {(isCommentsOpen && story.kids) && <StoryComments comments={story.kids} />}
    </React.Fragment>
  ) : null;
});