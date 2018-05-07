class Player extends SpriteEntity {
    constructor(emoji, controls, onDestroy) {
        super({
            x: 500,
            y: 500
        }, emoji, 100, onDestroy);

        this.cannon = new Cannon(this);
        this.speed = 5;
        this.controls = controls;
        this.bullets = [];
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

        const bullets = this.bullets;

        if (keyDown(this.controls.shoot)) {
            this.bullets.push(new Bullet(this.sprite.position, {
                x: mouseX,
                y: mouseY
            }, function() {
                bullets.remove(this);
            }));
        }

        for (const player of players) {
            if (player === this) {
                continue;
            }

            player.sprite.collide(this.sprite);

            for (const bullet of this.bullets) {
                bullet.update();

                if (bullet.sprite.collide(player.sprite)) {
                    bullet.destroy();
                    player.destroy();

                    this.bullets.remove(bullet);
                }
            }
        }

        this.cannon.update(this.sprite.position, Math.atan2(mouseY - this.sprite.position.y, mouseX - this.sprite.position.x) * 180 / Math.PI);
    }

    draw() {
        for (const bullet of this.bullets) {
            bullet.draw();
        }

        this.cannon.draw();

        super.draw();
    }

    move(coordinate, multiplier = 1) {
        this._sprite.position[coordinate] += this.speed * multiplier;
    }
}