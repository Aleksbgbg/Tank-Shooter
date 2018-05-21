const spriteCache = { };

class SpriteEntity {
    constructor(parametersInput) {
        if (new.target === SpriteEntity) {
            throw new TypeError("Cannot instantiate abstract class 'SpriteEntity'.");
        }

        const parameters = {
            position: createVector(0, 0),
            sprite: "",
            imageSetup: image => { },
            spriteSetup: sprite => { },
            onDestroy: () => { }
        };

        for (const parameter in parametersInput) {
            if (parameters.hasOwnProperty(parameter)) {
                parameters[parameter] = parametersInput[parameter];
            }
        }

        if (!spriteCache.hasOwnProperty(parameters.sprite)) {
            spriteCache[parameters.sprite] = loadImage(`Images/${parameters.sprite}.png`, parameters.imageSetup);
        }

        this.sprite = createSprite(parameters.position.x, parameters.position.y);
        this.sprite.addImage(spriteCache[parameters.sprite]);
        this.sprite.spriteEntity = this;

        parameters.spriteSetup(this.sprite);

        this.onDestroy = parameters.onDestroy;
    }

    get sprite() {
        return this._sprite;
    }

    set sprite(value) {
        this._sprite = value;
    }

    get position() {
        return this.sprite.position;
    }

    set position(value) {
        this.sprite.position = value;
    }

    update() {
    }

    draw() {
        drawSprite(this.sprite);
    }

    destroy() {
        this.sprite.remove();
        this.onDestroy();
    }
}
