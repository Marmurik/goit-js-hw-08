import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(onPlay, 1000));

    function onPlay({seconds}) {
    localStorage.setItem(PLAYER_CURRENT_TIME, seconds)
    }

    setCurrentTime()

    function setCurrentTime () {
    if (!localStorage.getItem(PLAYER_CURRENT_TIME)) {
        return
    }
    player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME))
}
    