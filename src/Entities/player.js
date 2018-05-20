class Player extends SpriteEntity {
    constructor(emoji, controls, onDestroy) {
        super({
            position: createVector(500, 500),
            sprite: emoji,
            imageSetup: image => image.resize(25, 0),
            spriteSetup: sprite =>  sprite.setCollider("circle", 0, 0, 12),
            onDestroy
        });

        config.groups.players.add(this.sprite);

        this.cannon = new Cannon(this);
        this.speed = 5;

        this.controls = { };

        const controlActions = {
            up: () => this.move("y", -1),
            down: () => this.move("y"),
            left: () => this.move("x", -1),
            right: () => this.move("x"),
            shoot: () => this.cannon.shoot()
        };

        for (const control in controls) {
            this.controls[control] = {
                keyCode: controls[control],
                action: controlActions[control]
            };
        }
    }

    update(players) {
        for (const controlKey of ["up", "down", "left", "right"]) {
            if (keyDown(this.controls[controlKey].keyCode)) {
                this.controls[controlKey].action();
            }
        }

        this.cannon.update(this.sprite.position, this.sprite.position.getAngleTowards(createVector(mouseX, mouseY)));
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