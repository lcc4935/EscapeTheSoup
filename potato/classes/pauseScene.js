/**
 * Lauren Casale
 * PauseScene
 */

export class PauseScene extends Phaser.Scene {
    constructor() {
        super({ key: "PauseScene" });

        this.resumeButton;
        this.pauseInstructionsButton;
    }

    /* Loads Images */
    preload() {
        this.load.image('pauseBackground', 'myAssets/pauseBackground.png');
        this.load.image('resumeButton', 'myAssets/resumeButton.png');
        this.load.image('resumeButtonHover', 'myAssets/resumeButtonHover.png');
        this.load.image('pauseInstructionsButton', 'myAssets/pauseInstructionsButton.png');
        this.load.image('pauseInstructionsButtonHover', 'myAssets/pauseInstructionsButtonHover.png');
    }

    /* Button Interactions */
    create() {
        this.add.image(640, 370, 'pauseBackground');

        this.resumeButton = this.add.image(620, 440, 'resumeButton');
        this.resumeButton.setInteractive();
        this.resumeButton.on('pointerdown', this.clickResumeButton, this);
        this.resumeButton.on('pointerover', this.hoverResumeButton, this);
        this.resumeButton.on('pointerout', this.unhoverResumeButton, this);
    }

    /* Button Functions */
    hoverResumeButton() {
        this.resumeButton.setTexture('resumeButtonHover');
    }
    unhoverResumeButton() {
        this.resumeButton.setTexture('resumeButton');
    }
    clickResumeButton() {
        this.scene.switch('GameScene');
        this.scene.stop();
    }
}