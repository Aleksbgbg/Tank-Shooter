const config = {
    screen: {
        width: 800,
        height: 700
    },
    players: [],
    groups: { },
    bullets: {
        deathTimer: 4000
    },
    mapTile: {
        dimension: 22
    }
};

function preload() {
    loadStrings("Entities/Map/map.txt", mapText => config.map = new GameMap(mapText));

    for (const group of ["players", "bullets", "tiles"]) {
        config.groups[group] = new Group();
    }

    function load() {
        function removePlayer() {
            config.players.remove(this);

            if (config.players.length < 2) {
                for (const player of config.players) {
                    player.destroy();
                }

                config.players.length = 0;
                load();
            }
        }

        config.players.push(new Player("Happy", {
            forward: 87, // W
            backward: 83, // S
            rotateLeft: 65, // A
            rotateRight: 68, // D
            shoot: 81 // Q
        }, removePlayer));

        config.players.push(new Player("Neutral", {
            forward: 73, // I
            backward: 75, // K
            rotateLeft: 74, // J
            rotateRight: 76, // L
            shoot: 85 // U
        }, removePlayer));

        config.players.push(new Player("Smiley", {
            forward: 38, // Up arrow
            backward: 40, // Down arrow
            rotateLeft: 37, // Left arrow
            rotateRight: 39, // Right arrow
            shoot: 191 // Forward slash ('/')
        }, removePlayer));
    }

    load();
}

function setup() {
    createCanvas(config.screen.width, config.screen.height);
}

function draw() {
    clear();

    config.map.update();
    config.map.draw();

    config.groups.bullets.draw();

    config.groups.players.overlap(config.groups.bullets, function(player, bullet) {
        player.spriteEntity.destroy();
        bullet.spriteEntity.destroy();
    });

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