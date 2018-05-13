class GameMap {
    constructor() {
        this.tilesGroup = new Group();
        this.tiles = [];

        const makeWall = (startPosition, tileCount, direction) => {
            const start = (function() {
                if (direction === "x") {
                    return createVector(startPosition, 11);
                }

                return createVector(45, startPosition);
            })();

            const vectorFactory = (function() {
                if (direction === "x") {
                    return (iteration) => createVector(iteration * 90, 11);
                }

                return (iteration) => createVector(11, iteration * 90);
            })();

            for (let iteration = 0; iteration < tileCount; ++iteration) {
                const mapTile = new MapTile(p5.Vector.add(start, vectorFactory(iteration)));

                this.tiles.push(mapTile);
                this.tilesGroup.add(mapTile.sprite);
            }
        };

        makeWall(45, 10, "x");
        makeWall(45, 10, "y");
    }

    update() {
        config.bullets.group.bounce(this.tilesGroup);
    }

    draw() {
        this.tilesGroup.draw();
    }
}