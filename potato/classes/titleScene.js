/**
 * Lauren Casale
 * TitleScene
 */

export class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: "TitleScene" });

        this.startButton;
        this.instructionsButton;
        this.titleName;
        this.startDial;
        this.instructionsDial;
    }

    /* Loads Images */
    preload() {
        this.load.image('titleBackground', 'myAssets/titleBackground.png');
        this.load.image('startButton', 'myAssets/startButton.png');
        this.load.image('startButtonHover', 'myAssets/startButtonHover.png');
        this.load.image('instructionsButton', 'myAssets/instructionsButton.png');
        this.load.image('instructionsButtonHover', 'myAssets/instructionsButtonHover.png');
        this.load.image('titleName', 'myAssets/title.png');
        this.load.image('titleNameHover', 'myAssets/titleHover.png');
        this.load.image('season', 'myAssets/seasoning.png');
        this.load.image('dialOff', 'myAssets/dialOff.png');
        this.load.image('dialOn', 'myAssets/dialOn.png');
    }

    /* Button Interactions */
    create() {
        this.add.image(640, 370, 'titleBackground');
        this.startDial = this.add.image(180, 330, 'dialOff');
        this.instructionsDial = this.add.image(420, 330, 'dialOff');

        this.startButton = this.add.image(330, 670, 'startButton');
        this.startButton.setInteractive();
        this.startButton.on('pointerdown', this.clickStartButton, this);
        this.startButton.on('pointerover', this.hoverStartButton, this);
        this.startButton.on('pointerout', this.unhoverStartButton, this);

        this.instructionsButton = this.add.image(330, 540, 'instructionsButton');
        this.instructionsButton.setInteractive();
        this.instructionsButton.on('pointerdown', this.clickInstructionsButton, this);
        this.instructionsButton.on('pointerover', this.hoverInstructionsButton, this);
        this.instructionsButton.on('pointerout', this.unhoverInstructionsButton, this);

        this.titleName = this.add.image(330, 125, 'titleName');
        this.titleName.setInteractive();
        this.titleName.on('pointerover', this.hoverTitleName, this);
        this.titleName.on('pointerout', this.unhoverTitleName, this);
    }

    /* Button Functions - start button */
    hoverStartButton() {
        this.startButton.setTexture('startButtonHover');
        this.startDial.setTexture('dialOn');
    }
    unhoverStartButton() {
        this.startButton.setTexture('startButton');
        this.startDial.setTexture('dialOff');
    }
    clickStartButton() {
        this.scene.start("GameScene");
        this.scene.stop();
    }

    /* Button Functions - instructions button */
    hoverInstructionsButton() {
        this.instructionsButton.setTexture('instructionsButtonHover');
        this.instructionsDial.setTexture('dialOn');
    }
    unhoverInstructionsButton() {
        this.instructionsButton.setTexture('instructionsButton');
        this.instructionsDial.setTexture('dialOff');
    }
    clickInstructionsButton() {
        this.scene.start("InstructionsScene");
        this.scene.stop();
    }

    /* Image Emitter on Hover - title */
    hoverTitleName() {
        this.titleName.setTexture('titleNameHover');
        this.season = this.add.particles('season').createEmitter({
            x: 300,
            y: -20,
            lifespan: 1250,
            speed: { min: 400, max: 600 },
            angle: 5,
            gravityY: 300,
            quantity: 2,
            scale: { start: 0.5, end: 0 }
        });
        this.season.start();
    }
    unhoverTitleName() {
        this.titleName.setTexture('titleName');
        this.season.stop();
    }
}