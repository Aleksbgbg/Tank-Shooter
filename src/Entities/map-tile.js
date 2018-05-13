class MapTile extends SpriteEntity {
    constructor(position) {
        super({
            position,
            sprite: "Minus",
            imageSetup: image => image.resize(config.mapTiles.width, config.mapTiles.height),
            spriteSetup: sprite => sprite.immovable = true
        });
    }
}