const config = {
    screen: {
        width: 800,
        height: 700
    },
    players: []
};

function preload() {
    config.players.push(new Player({
        up: "W",
        down: "S",
        left: "A",
        right: "D",
        shoot: "Q"
    }));
    config.players.push(new Player({
        up: "I",
        down: "K",
        left: "J",
        right: "L",
        shoot: "U"
    }));
    config.players.push(new Player({
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        shoot: 191
    }));
}

function setup() {
    createCanvas(config.screen.width, config.screen.height);
}

function draw() {
    clear();

    for (const player of config.players) {
        player.update();
        player.draw();
    }
}