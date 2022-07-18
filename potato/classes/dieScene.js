/**
 * Lauren Casale
 * DieScene
 */

export class DieScene extends Phaser.Scene {
    constructor() {
        super({ key: "DieScene" });

        this.dieScoreText;
    }

    /* Gets Score */
    init (score) {
        this.score = score;
    }

    /* Loads Images */
    preload() {
        this.load.image('dieBackground', 'myAssets/dieBackground.png');
        this.load.image('dieScoreBanner', 'myAssets/scoreBanner.png');
    }

    /* Shows Score */
    create() {
        this.add.image(400, 380, 'dieBackground');
        this.add.image(1050, 300, 'dieScoreBanner');
        this.scoreText = this.add.text(950, 280, 'Score: ' + this.score, { fontFamily: 'Arial', fontSize: '40px', fill: '#d2be6dff', stroke: '#ab4500ff', strokeThickness: '5' });
    }
}