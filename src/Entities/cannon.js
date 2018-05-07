class Cannon extends SpriteEntity {
    constructor(player) {
        super(player.sprite.position, "Cannon", 20);
    }

    update(position, rotation) {
        const distanceFromSprite = 50;

        this.sprite.position.x = position.x + distanceFromSprite * Math.cos(rotation * Math.PI / 180);
        this.sprite.position.y = position.y + distanceFromSprite * Math.sin(rotation * Math.PI / 180);
        this.sprite.rotation = rotation + 90;
    }
}