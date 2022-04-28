import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
import App from '../components/App.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {// TODO
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: { q: query }, //event.target.value
    contentType: 'application/json',
    success: (data) => {
      callback(data); //this cb just returns the data to app
    },
    error: (status) => {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

export default searchYouTube;
