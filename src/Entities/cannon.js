class Cannon extends SpriteEntity {
    constructor(player) {
        super({
            position: player.sprite.position,
            sprite: "Cannon",
            imageSetup: image => image.resize(10, 0)
        });

        this.bullets = [];
        this.rotation = 0;
    }

    get rotation() {
        return this._rotation;
    }

    set rotation(value) {
        this._rotation = value;
        this.sprite.rotation = this._rotation + 90;
    }

    shoot() {
        if (this.bullets.length >= 5) {
            return;
        }

        const bullets = this.bullets;

        const position = createVector(this.sprite.position.x, this.sprite.position.y);
        position.moveBy(15, this.rotation);

        this.bullets.push(new Bullet(position, this.rotation, function() {
            bullets.remove(this);
        }));
    }

    update(position) {
        this.sprite.position = createVector(position.x, position.y);
        this.sprite.position.moveBy(15, this.rotation);
    }

    rotate(magnitude) {
        this.rotation += 5 * magnitude;
    }
}