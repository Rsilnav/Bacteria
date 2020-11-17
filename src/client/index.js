// Learn more about this file at:
// https://victorzhou.com/blog/build-an-io-game-part-1/#3-client-entrypoints
import { connect, ready, unready } from './networking';
// import { startRendering, stopRendering } from './render';
// import { startCapturingInput, stopCapturingInput } from './input';
// import { downloadAssets } from './assets';
// import { initState } from './state';
// import { setLeaderboardHidden } from './leaderboard';

// I'm using a tiny subset of Bootstrap here for convenience - there's some wasted CSS,
// but not much. In general, you should be careful using Bootstrap because it makes it
// easy to unnecessarily bloat your site.
// import './css/bootstrap-reboot.css';
// import './css/main.css';

const readyButton = document.getElementById('ready-button');
const unreadyButton = document.getElementById('unready-button');

Promise.all([
  connect(),
]).then(() => {
  readyButton.onclick = () => {
    ready();
  };
  unreadyButton.onclick = () => {
    unready();
  };
}).catch(console.error);
