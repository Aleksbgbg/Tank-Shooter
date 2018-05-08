class Player extends SpriteEntity {
    constructor(emoji, controls, onDestroy) {
        super({
            x: 500,
            y: 500
        },
            emoji, onDestroy,
                image => image.resize(100, 0),
                sprite => sprite.setCollider("circle", 0, 0, 50));

        this.cannon = new Cannon(this);
        this.speed = 5;
        this.controls = controls;
    }

    get sprite() {
        return this._sprite;
    }

    set sprite(value) {
        this._sprite = value;
    }

    update(players) {
        if (keyDown(this.controls.up)) {
            this.move("y", -1);
        }

        if (keyDown(this.controls.down)) {
            this.move("y");
        }

        if (keyDown(this.controls.left)) {
            this.move("x", -1);
        }

        if (keyDown(this.controls.right)) {
            this.move("x");
        }

        const otherPlayers = players.filter(player => player !== this);

        for (const player of otherPlayers) {
            player.sprite.collide(this.sprite);
        }

        this.cannon.update(this.sprite.position, this.sprite.position.getAngleTowards({
            x: mouseX,
            y: mouseY
        }), otherPlayers);
    }

    draw() {
        this.cannon.draw();
        super.draw();
    }

    move(coordinate, multiplier = 1) {
        this._sprite.position[coordinate] += this.speed * multiplier;
    }

    keyPressed(key) {
        if (key === this.controls.shoot) {
            this.cannon.shoot();
        }
    }
}