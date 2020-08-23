import axios from 'axios';

const KEY = 'AIzaSyB9DOJ4EVNzwAO2De04LZnED_9nvjqCGPM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
