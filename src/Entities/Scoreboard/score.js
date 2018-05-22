class Score extends SpriteEntity {
    constructor(position) {
        super({
            position,
            sprites: [...Array(10).keys()].map(index => index.toString()),
            imageSetup: image => image.resize(100, 100)
        });

        this.value = 0;
    }
    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this.sprite.changeImage(this.value);
    }

    increment() {
        ++this.value;
    }
}