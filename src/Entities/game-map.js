class GameMap {
    constructor() {
        this.tilesGroup = new Group();
        this.tiles = [];

        const makeWall = (startPosition, tileCount, direction) => {
            const tileWidthHalf = config.mapTiles.width / 2;
            const tileHeightHalf = config.mapTiles.height / 2;

            startPosition.add(direction === "x" ? createVector(tileWidthHalf, 0) : createVector(0, tileHeightHalf));

            const vectorFactory = (function() {
                if (direction === "x") {
                    return (iteration) => createVector(iteration * config.mapTiles.width, tileHeightHalf);
                }

                return (iteration) => createVector(tileWidthHalf, iteration * config.mapTiles.height);
            })();

            for (let iteration = 0; iteration < tileCount; ++iteration) {
                const mapTile = new MapTile(vectorFactory(iteration).add(startPosition));

                this.tiles.push(mapTile);
                this.tilesGroup.add(mapTile.sprite);
            }
        };

        function getTiles(pixels) {
            return pixels / config.mapTiles.width;
        }

        makeWall(createVector(0, 0), getTiles(config.screen.width) - 1, "x"); // top
        makeWall(createVector(config.mapTiles.width, config.screen.height - config.mapTiles.height), getTiles(config.screen.width) - 1, "x"); // bottom

        makeWall(createVector(0, config.mapTiles.height), getTiles(config.screen.height) - 1, "y"); // left
        makeWall(createVector(config.screen.width - config.mapTiles.width, 0), getTiles(config.screen.height) - 1, "y"); // right
    }

    update() {
        config.bullets.group.bounce(this.tilesGroup);
    }

    draw() {
        this.tilesGroup.draw();
    }
}