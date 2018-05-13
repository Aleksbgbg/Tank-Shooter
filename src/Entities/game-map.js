class GameMap {
    constructor() {
        this.tilesGroup = new Group();
        this.tiles = [];

        for (let index = 0; index < 10; ++index) {
            const mapTile = new MapTile({
                x: 45 + index * 90,
                y: 11
            });

            this.tiles.push(mapTile);
            this.tilesGroup.add(mapTile.sprite);
        }
    }

    update() {
        config.bullets.group.bounce(this.tilesGroup);
    }

    draw() {
        this.tilesGroup.draw();
    }
}