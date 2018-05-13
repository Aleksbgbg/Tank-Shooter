class GameMap {
    constructor() {
        this.tilesGroup = new Group();
        this.tiles = [];

        const makeWall = (startPosition, tileCount, direction) => {
            const halfTile = config.mapTile.dimension / 2;

            startPosition.add(direction === "x" ? createVector(halfTile, 0) : createVector(0, halfTile));

            const vectorFactory = (function() {
                if (direction === "x") {
                    return (iteration) => createVector(iteration * config.mapTile.dimension, halfTile);
                }

                return (iteration) => createVector(halfTile, iteration * config.mapTile.dimension);
            })();

            for (let iteration = 0; iteration < tileCount; ++iteration) {
                const mapTile = new MapTile(vectorFactory(iteration).add(startPosition));

                this.tiles.push(mapTile);
                this.tilesGroup.add(mapTile.sprite);
            }
        };

        function getTiles(pixels) {
            return pixels / config.mapTile.dimension;
        }

        makeWall(createVector(0, 0), getTiles(config.screen.width) - 1, "x"); // top
        makeWall(createVector(config.mapTile.dimension, config.screen.height - config.mapTile.dimension), getTiles(config.screen.width) - 1, "x"); // bottom

        makeWall(createVector(0, config.mapTile.dimension), getTiles(config.screen.height) - 1, "y"); // left
        makeWall(createVector(config.screen.width - config.mapTile.dimension, 0), getTiles(config.screen.height) - 1, "y"); // right
    }

    update() {
        config.bullets.group.bounce(this.tilesGroup);
        config.playersGroup.collide(this.tilesGroup);
    }

    draw() {
        this.tilesGroup.draw();
    }
}