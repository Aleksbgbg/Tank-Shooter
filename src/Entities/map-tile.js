class MapTile extends SpriteEntity {
    constructor(position) {
        super(position, "Minus");
        this.sprite.immovable = true;
    }
}