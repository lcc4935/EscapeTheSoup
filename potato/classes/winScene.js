/**
 * Lauren Casale
 * WinScene
 */

export class WinScene extends Phaser.Scene {
    constructor() {
        super({ key: "WinScene" });

        this.dieScoreText;
    }

    /* Gets Score */
    init (score) {
        this.score = score;
    }

    /* Loads Images */
    preload() {
        this.load.image('winBackground', 'myAssets/winBackground.png');
        this.load.image('dieScoreBanner', 'myAssets/scoreBanner.png');
    }

    /* Shows Score */
    create() {
        this.add.image(400, 380, 'winBackground');
        this.add.image(1050, 300, 'dieScoreBanner');
        this.scoreText = this.add.text(950, 280, 'Score: ' + this.score, { fontFamily: 'Arial', fontSize: '40px', fill: '#d2be6dff', stroke: '#ab4500ff', strokeThickness: '5' });
    }
}