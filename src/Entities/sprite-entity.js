const spriteCache = { };

function getSprite(name, setup) {
    if (!spriteCache.hasOwnProperty(name)) {
        spriteCache[name] = loadImage(`Images/${name}.png`, setup);
    }

    return spriteCache[name];
}

class SpriteEntity {
    constructor(parametersInput) {
        if (new.target === SpriteEntity) {
            throw new TypeError("Cannot instantiate abstract class 'SpriteEntity'.");
        }

        const parameters = {
            position: createVector(0, 0),
            sprite: "",
            sprites: [],
            imageSetup: image => { },
            spriteSetup: sprite => { },
            onDestroy: () => { }
        };

        for (const parameter in parametersInput) {
            if (parameters.hasOwnProperty(parameter)) {
                parameters[parameter] = parametersInput[parameter];
            }
        }

        this.sprite = createSprite(parameters.position.x, parameters.position.y);
        if (parameters.sprites.length === 0) {
            this.sprite.addImage(getSprite(parameters.sprite, parameters.imageSetup));
        } else {
            for (const sprite of parameters.sprites) {
                this.sprite.addImage(sprite, getSprite(sprite, parameters.imageSetup))
            }
        }

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
