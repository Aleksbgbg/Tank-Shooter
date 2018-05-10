class MapTile extends SpriteEntity {
    constructor(position, dimensions) {
        super(position, "Minus", image => image.resize(dimensions.width, dimensions.height));
        this.sprite.immovable = true;
    }
}