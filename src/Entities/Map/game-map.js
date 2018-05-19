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

    }

    draw() {
        for (const tile of this.grid.tiles) {
            tile.draw();
        }
    }

    // render(region) {
    //     const tileRegion = {
    //         x: {
    //             start: Math.floor(region.x / Tile.dimension)
    //         },
    //         y: {
    //             start: Math.floor(region.y / Tile.dimension)
    //         }
    //     };
    //
    //     tileRegion.x.end = tileRegion.x.start + Math.floor(region.width / Tile.dimension) + 1;
    //     tileRegion.y.end = tileRegion.y.start + Math.floor(region.height / Tile.dimension) + 1;
    //
    //     for (let x = tileRegion.x.start; x < tileRegion.x.end; ++x) {
    //         for (let y = tileRegion.y.start; y < tileRegion.y.end; ++y) {
    //             const position = createVector(x, y);
    //
    //             if (this.grid.exists(position)) {
    //                 this.grid.getTile(position).draw(createVector(-region.x, -region.y));
    //             }
    //         }
    //     }
    // }
}