class MapTile extends SpriteEntity {
    constructor(position) {
        super({
            position,
            sprite: "Minus",
            spriteSetup: sprite => sprite.immovable = true
        });
    }
}