class Tile extends SpriteEntity {
    constructor(isSolid) {
        super({
            sprite: "Black Square",
            imageSetup: image => image.resize(Tile.dimension, Tile.dimension),
            spriteSetup: sprite => sprite.immovable = true
        });

        this.isSolid = isSolid;

        if (this.isSolid) {
            config.groups.tiles.add(this.sprite);
        }
    }

    static get dimension() {
        return config.mapTile.dimension;
    }

    draw() {
        if (this.isSolid) {
            super.draw();
        }
    }
}