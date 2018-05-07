const config = {
    screen: {
        width: 800,
        height: 700
    },
    players: []
};

function preload() {
    function removePlayer() {
        config.players.remove(this);
    }

    config.players.push(new Player("Happy", {
        up: "W",
        down: "S",
        left: "A",
        right: "D",
        shoot: "Q"
    }, removePlayer));

    config.players.push(new Player("Neutral", {
        up: "I",
        down: "K",
        left: "J",
        right: "L",
        shoot: "U"
    }, removePlayer));

    config.players.push(new Player("Smiley", {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        shoot: 191
    }, removePlayer));
}

function setup() {
    createCanvas(config.screen.width, config.screen.height);
}

function draw() {
    clear();

    for (const player of config.players) {
        player.update(config.players);
        player.draw();
    }
}