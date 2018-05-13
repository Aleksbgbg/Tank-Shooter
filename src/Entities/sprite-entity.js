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

        this._sprite = createSprite(parameters.position.x, parameters.position.y);
        this._sprite.addImage(spriteCache[parameters.sprite]);

        parameters.spriteSetup(this.sprite);

        this.onDestroy = parameters.onDestroy;
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
