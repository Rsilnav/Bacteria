// Learn more about this file at:
// https://victorzhou.com/blog/build-an-io-game-part-1/#4-client-networking
import io from 'socket.io-client';

const Constants = require('../shared/constants');

const socketProtocol = (window.location.protocol.includes('https')) ? 'wss' : 'ws';
const socket = io(`${socketProtocol}://${window.location.host}`, { reconnection: false });
const connectedPromise = new Promise(resolve => {
    socket.on('connect', () => {
        console.log('Connected to server!');
        resolve();
    });
});

export const connect = () => (
    connectedPromise.then(() => {
        // Register callbacks
        // socket.on(Constants.MSG_TYPES.GAME_UPDATE, processGameUpdate);
        // socket.on(Constants.MSG_TYPES.GAME_OVER, onGameOver);
        socket.on('disconnect', () => {
            console.log('Disconnected from server.');
        });
    })
);

export const ready = () => {
    socket.emit(Constants.MSG_TYPES.READY);
};

export const unready = () => {
    socket.emit(Constants.MSG_TYPES.NOT_READY);
};

// export const play = username => {
//     socket.emit(Constants.MSG_TYPES.JOIN_GAME, username);
// };

// export const updateDirection = throttle(20, dir => {
//     socket.emit(Constants.MSG_TYPES.INPUT, dir);
// });