const Constants = require('../shared/constants');

class Game {
    constructor() {
        this.sockets = {};
        this.readySockets = new Set();

        setInterval(this.printStatus.bind(this), 2 * 1000);
    }

    addPlayer(socket, username) {
        this.sockets[socket.id] = socket;
    }

    ready(socket) {
        this.readySockets.add(socket.id);
    }

    unready(socket) {
        this.readySockets.delete(socket.id);
    }

    removePlayer(socket) {
        delete this.sockets[socket.id];
        this.readySockets.delete(socket.id);
    }

    printStatus() {
        console.log(this.readySockets);
    }
}

module.exports = Game;