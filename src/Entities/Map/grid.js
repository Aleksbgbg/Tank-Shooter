class Grid {
    constructor(tiles, width, height) {
        this.width = width;
        this.height = height;

        this.tiles = tiles;

        for (let x = 0; x < this.width; ++x) {
            for (let y = 0; y < this.height; ++y) {
                const vector = createVector(x, y);

                const z = Math.floor(Tile.dimension / 2);

                this.getTile(vector).position = vector.mult(Tile.dimension).add(z, z);
            }
        }
    }

    getTile(position) {
        return this.tiles[this.calculateIndex(position)];
    }

    setTile(position, tile) {
        this.tiles[this.calculateIndex(position)] = tile;
    }

    exists(position) {
        return this.calculateIndex(position) < this.tiles.length;
    }

    calculateIndex(tilePosition) {
        return tilePosition.x + tilePosition.y * this.width;
    }
}