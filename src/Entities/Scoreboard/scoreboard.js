class Scoreboard {
    constructor(players) {
        this.scores = { };

        let scorePosition = 200;

        for (const player of players) {
            this.scores[player.name] = new Score(createVector(scorePosition, config.screen.height + 50));
            scorePosition += 200;
        }
    }

    reset() {
        for (const score in this.scores) {
            this.scores[score].value = 0;
        }
    }

    draw() {
        for (const score in this.scores) {
            this.scores[score].draw();
        }
    }
}