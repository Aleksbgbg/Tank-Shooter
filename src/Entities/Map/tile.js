class Tile extends SpriteEntity {
    constructor(isSolid) {
        super({
            sprite: "Black Square",
            imageSetup: image => image.resize(Tile.dimension, Tile.dimension),
            spriteSetup: sprite => sprite.immovable = true
        });

        this.isSolid = isSolid;
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