const config = {
    screen: {
        width: 800,
        height: 700
    },
    players: []
};

function preload() {
    config.players.push(new Player());
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