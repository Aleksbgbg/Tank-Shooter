class SpriteEntity {
    constructor(position, sprite, imageSetup, spriteSetup, onDestroy = () => { }) {
        if (new.target === SpriteEntity) {
            throw new TypeError("Cannot instantiate abstract class 'SpriteEntity'.");
        }

        this._sprite = createSprite(position.x, position.y);
        this._sprite.addImage(loadImage(`Images/${sprite}.png`, imageSetup));

        if (spriteSetup !== undefined) {
            spriteSetup(this._sprite);
        }

        this.onDestroy = onDestroy;
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

    destroy() {
        this._sprite.remove();
        this.onDestroy();
    }
}
