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
            forward: () => this.move(1),
            backward: () => this.move(-1),
            rotateLeft: () => this.cannon.rotate(-1),
            rotateRight: () => this.cannon.rotate(1),
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
        for (const controlKey of ["forward", "backward", "rotateLeft", "rotateRight"]) {
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

    move(magnitude) {
        this.sprite.position.moveBy(this.speed * magnitude, this.cannon.rotation);
    }

    keyPressed(key) {
        if (key === this.controls.shoot.keyCode) {
            this.controls.shoot.action();
        }
    }

    destroy() {
        this.cannon.destroy();
        super.destroy();
    }
}