import axios from 'axios';
import { selectFields } from '../selectors/selectFields';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${BASE_URL}newstories.json`;
export const storyUrl = `${BASE_URL}item/`;

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl)
    .then(({ data }) => data); //destructuring data to get only data with IDs

    return result;
}

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

    return result;
}

