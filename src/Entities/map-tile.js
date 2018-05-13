class MapTile extends SpriteEntity {
    constructor(position) {
        super({
            position,
            sprite: "Minus",
            imageSetup: image => image.resize(22, 22),
            spriteSetup: sprite => sprite.immovable = true
        });
    }
}