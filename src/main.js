const config = {
    screen: {
        width: 800,
        height: 700
    },
    players: [],
    bullets: {
        deathTimer: 1000,
        group: null
    },
    map: null
};

function preload() {
    config.map = new GameMap();
    config.bullets.group = new Group();

    function removePlayer() {
        config.players.remove(this);
    }

    config.players.push(new Player("Happy", {
        up: 87, // W
        down: 83, // S
        left: 65, // A
        right: 68, // D
        shoot: 81 // Q
    }, removePlayer));

    config.players.push(new Player("Neutral", {
        up: 73, // I
        down: 75, // K
        left: 74, // J
        right: 76, // L
        shoot: 85 // U
    }, removePlayer));

    config.players.push(new Player("Smiley", {
        up: 38, // Up arrow
        down: 40, // Down arrow
        left: 37, // Left arrow
        right: 39, // Right arrow
        shoot: 191 // Forward slash ('/')
    }, removePlayer));
}

function setup() {
    createCanvas(config.screen.width, config.screen.height);
}

function draw() {
    clear();

    config.map.update();
    config.map.draw();

    for (const player of config.players) {
        player.update(config.players);
        player.draw();
    }
}

function keyPressed(event) {
    for (const player of config.players) {
        player.keyPressed(event.keyCode);
    }
}