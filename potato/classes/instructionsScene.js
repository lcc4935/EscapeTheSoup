/**
 * Lauren Casale
 * InstructionsScene
 */

export class InstructionsScene extends Phaser.Scene {
    constructor() {
        super({ key: "InstructionsScene" });

        this.backButton;
    }

    /* Loads Images */
    preload() {
        this.load.image('instructionsBackground', 'myAssets/instructionsBackground.png');
        this.load.image('instructionsTitle', 'myAssets/instructionsTitle.png');
        this.load.image('backButton', 'myAssets/backButton.png');
        this.load.image('backButtonHover', 'myAssets/backButtonHover.png');
    }

    /* Button Interactions */
    create() {
        this.add.image(620, 370, 'instructionsBackground');
        this.add.image(325, 115, 'instructionsTitle');

        this.backButton = this.add.image(900, 75, 'backButton');
        this.backButton.setInteractive();
        this.backButton.on('pointerdown', this.clickBackButton, this);
        this.backButton.on('pointerover', this.hoverBackButton, this);
        this.backButton.on('pointerout', this.unhoverBackButton, this);
    }

    /* Button Functions */
    unhoverBackButton() {
        this.backButton.setTexture('backButton');
    }
    hoverBackButton() {
        this.backButton.setTexture('backButtonHover');
    }
    clickBackButton() {
        this.scene.start("TitleScene");
        this.scene.stop();
    }
}