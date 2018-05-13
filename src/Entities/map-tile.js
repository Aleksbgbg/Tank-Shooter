class MapTile extends SpriteEntity {
    constructor(position) {
        super({
            position,
            sprite: "Minus",
            imageSetup: image => image.resize(config.mapTile.dimension, config.mapTile.dimension),
            spriteSetup: sprite => sprite.immovable = true
        });
    }
}