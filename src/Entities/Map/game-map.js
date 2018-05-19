class GameMap {
    constructor(contents) {
        const tiles = [];

        const width = contents[0].length;
        const height = contents.length;

        for (const character of contents.join("")) {
            tiles.push(new Tile(character === "*"));
        }

        this.grid = new Grid(tiles, width, height);
    }

    update() {
        config.groups.bullets.bounce(config.groups.tiles);
        config.groups.players.collide(config.groups.tiles);
    }

    draw() {
        for (const tile of this.grid.tiles) {
            tile.draw();
        }
    }
}