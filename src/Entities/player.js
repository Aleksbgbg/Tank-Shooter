class Player extends SpriteEntity {
    constructor(emoji, controls, onDeath) {
        super({
            x: 500,
            y: 500
        }, emoji, 100);

        this.speed = 5;

        this.controls = controls;

        this.bullets = [];

        this.onDeath = onDeath;
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

        if (keyDown(this.controls.shoot)) {
            this.bullets.push(new Bullet(this.sprite.position, {
                x: mouseX,
                y: mouseY
            }));
        }

        for (const player of players) {
            if (player === this) {
                continue;
            }

            player.sprite.collide(this.sprite);

            for (const bullet of this.bullets) {
                if (bullet.sprite.collide(player.sprite)) {
                    bullet.destroy();
                    player.destroy();

                    this.bullets.remove(bullet);
                }
            }
        }
    }

    draw() {
        super.draw();

        for (const bullet of this.bullets) {
            bullet.draw();
        }
    }

    move(coordinate, multiplier = 1) {
        this._sprite.position[coordinate] += this.speed * multiplier;
    }

    destroy() {
        super.destroy();
        this.onDeath();
    }
}