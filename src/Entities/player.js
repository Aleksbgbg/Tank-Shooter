class Player extends SpriteEntity {
    constructor(emoji, controls, onDestroy) {
        super({
            x: 500,
            y: 500
        }, emoji, image => image.resize(100, 0), sprite => sprite.setCollider("circle", 0, 0, 50), onDestroy);

        this.cannon = new Cannon(this);
        this.speed = 5;
        this.controls = controls;

        const controlActions = {
            up: () => this.move("y", -1),
            down: () => this.move("y"),
            left: () => this.move("x", -1),
            right: () => this.move("x"),
            shoot: () => this.cannon.shoot()
        };

        for (const control in this.controls) {
            this.controls[control] = {
                keyCode: this.controls[control],
                action: controlActions[control]
            };
        }
    }

    get sprite() {
        return this._sprite;
    }

    set sprite(value) {
        this._sprite = value;
    }

    update(players) {
        for (const controlKey of ["up", "down", "left", "right"]) {
            if (keyDown(this.controls[controlKey].keyCode)) {
                this.controls[controlKey].action();
            }
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
        if (key === this.controls.shoot.keyCode) {
            this.controls.shoot.action();
        }
    }
}