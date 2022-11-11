'use strict';

import  Player  from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = 0;

player.on(
  'timeupdate',
  _.throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    console.log(seconds);
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
