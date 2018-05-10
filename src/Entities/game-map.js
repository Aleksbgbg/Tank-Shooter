class GameMap {
    constructor() {
        this.tile = new MapTile({
            x: config.screen.width / 2,
            y: 0
        }, {
            width: config.screen.width,
            height: 10
        });
    }

    update() {
        for (const sprite of allSprites) {
            sprite.bounce(this.tile.sprite);
        }
    }

    draw() {
        this.tile.draw();
    }
}