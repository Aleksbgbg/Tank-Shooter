class SpriteEntity {
    constructor(position, sprite, resize) {
        if (new.target === SpriteEntity) {
            throw new TypeError("Cannot instantiate abstract class 'SpriteEntity'.");
        }

        this._sprite = createSprite(position.x, position.y);
        this._sprite.addImage(loadImage(`Images/${sprite}.png`, image => image.resize(resize, 0)));

        this._sprite.setCollider("circle", 0, 0, resize / 2);
    }

    get sprite() {
        return this._sprite;
    }

    set sprite(value) {
        this._sprite = value;
    }

    update() {
    }

    draw() {
        drawSprite(this._sprite);
    }
}
