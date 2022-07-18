/**
 * Lauren Casale
 * GameScene
 */

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameScene" });
        this.player;
        this.collectables;
        this.crown;
        this.seasoning;
        this.oil;
        this.pot;
        this.carrot;
        this.celery;
        this.cursors;
        this.gameOver = false;
        this.scoreText;
        this.oilY = 1150;
        this.pauseButton;
        this.keys;
        this.score = 0;
    }

    /* Loads Images */
    preload() {
        this.load.image('gameBackground', 'myAssets/gameBackground.png');
        this.load.image('oil', 'myAssets/oil.png');
        this.load.image('pot', 'myAssets/potBackground.png');
        this.load.image('wall', 'myAssets/wall.png');
        this.load.image('carrot', 'myAssets/carrot.png');
        this.load.image('celery', 'myAssets/celery.png');
        this.load.image('potHandleLeft', 'myAssets/potHandleLeft.png');
        this.load.image('potHandleRight', 'myAssets/potHandleRight.png');
        this.load.image('collectables', 'myAssets/collectables.png');
        this.load.image('crown', 'myAssets/crown.png');
        this.load.image('seasoning', 'myAssets/seasoning.png');
        this.load.image('pauseButton', 'myAssets/pauseButton.png');
        this.load.image('pauseButtonHover', 'myAssets/pauseButtonHover.png');
        this.load.spritesheet('potatoMan', 'myAssets/potatoCharacter.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('cookedPotato', 'myAssets/cookedPotato.png');
        this.load.image('kingPotato', 'myAssets/kingPotato.png');
    }

    create() {
        //Static Images
        this.add.image(625, 415, 'gameBackground');
        this.add.image(625, 423, 'pot');

        //Button Interactions
        this.pauseButton = this.add.image(1200, 30, 'pauseButton');
        this.pauseButton.setInteractive();
        this.pauseButton.on('pointerdown', this.clickPauseButton, this);
        this.pauseButton.on('pointerover', this.hoverPauseButton, this);
        this.pauseButton.on('pointerout', this.unhoverPauseButton, this);

        //Making Groups
        this.carrot = this.physics.add.staticGroup();
        this.celery = this.physics.add.staticGroup();

        this.potHandleLeft = this.physics.add.staticGroup();
        this.potHandleRight = this.physics.add.staticGroup();

        this.wall = this.physics.add.staticGroup(); //boundary - can't leave pot

        this.crown = this.physics.add.group();

        this.oil = this.physics.add.staticGroup();
        this.seasoning = this.physics.add.group();


        //Placing Platforms
        this.carrot.create(620, 675, 'carrot').setScale(0.5).refreshBody();
        this.carrot.create(290, 575, 'carrot').setScale(0.5).refreshBody();
        this.carrot.create(950, 450, 'carrot').setScale(0.5).refreshBody();
        this.carrot.create(310, 300, 'carrot').setScale(0.5).refreshBody();
        this.carrot.create(900, 160, 'carrot').setScale(0.5).refreshBody();
        this.carrot.create(350, 110, 'carrot').setScale(0.5).refreshBody();

        this.celery.create(310, 730, 'celery').setScale(0.5).refreshBody();
        this.celery.create(900, 600, 'celery').setScale(0.5).refreshBody();
        this.celery.create(600, 520, 'celery').setScale(0.5).refreshBody();
        this.celery.create(575, 380, 'celery').setScale(0.5).refreshBody();
        this.celery.create(700, 250, 'celery').setScale(0.5).refreshBody();
        this.celery.create(650, 80, 'celery').setScale(0.5).refreshBody();

        this.potHandleLeft.create(85, 90, 'potHandleLeft');
        this.potHandleRight.create(1165, 90, 'potHandleRight');

        this.wall.create(-15, 620, 'wall');
        this.wall.create(1264, 620, 'wall');

        //PotatoMan Creation
        this.player = this.physics.add.sprite(235, 650, 'potatoMan');
        this.player.setCollideWorldBounds(true);

        //PotatoMan Turning
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('potatoMan', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'potatoMan', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('potatoMan', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        //PotatoMan Moving Keys
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys("A,D");
        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //Placing Potatoes and Crown
        this.collectables = this.physics.add.group();

        this.collectables.create(385, 630, 'collectables');

        this.collectables.create(595, 575, 'collectables');
        this.collectables.create(670, 575, 'collectables');

        this.collectables.create(265, 475, 'collectables');
        this.collectables.create(345, 475, 'collectables');

        this.collectables.create(940, 500, 'collectables');
        this.collectables.create(850, 500, 'collectables');

        this.collectables.create(1000, 350, 'collectables');
        this.collectables.create(920, 350, 'collectables');

        this.collectables.create(640, 420, 'collectables');
        this.collectables.create(550, 420, 'collectables');

        this.collectables.create(270, 200, 'collectables');
        this.collectables.create(370, 200, 'collectables');

        this.collectables.create(520, 280, 'collectables');
        this.collectables.create(620, 280, 'collectables');

        this.collectables.create(950, 60, 'collectables');
        this.collectables.create(875, 60, 'collectables');

        this.collectables.create(730, 150, 'collectables');
        this.collectables.create(650, 150, 'collectables');

        this.collectables.create(320, 10, 'collectables');
        this.collectables.create(400, 10, 'collectables');

        this.collectables.create(600, -20, 'collectables');
        this.collectables.create(680, -20, 'collectables');

        this.collectables.create(160, -10, 'collectables');
        this.collectables.create(1090, -10, 'collectables');


        this.crown.create(60, -10, 'crown');

        //Score
        this.scoreText = this.add.text(1085, 75, 'Score: 0', { fontFamily: 'Arial', fontSize: '28px', fill: '#FFF' });

        //Collisions
        this.physics.add.collider(this.player, this.carrot);
        this.physics.add.collider(this.player, this.celery);
        this.physics.add.collider(this.player, this.potHandleLeft);
        this.physics.add.collider(this.player, this.potHandleRight);
        this.physics.add.collider(this.player, this.wall);

        this.physics.add.collider(this.collectables, this.carrot);
        this.physics.add.collider(this.collectables, this.celery);
        this.physics.add.collider(this.collectables, this.potHandleLeft);
        this.physics.add.collider(this.collectables, this.potHandleRight);
        this.physics.add.collider(this.crown, this.potHandleLeft);

        //Physics Interactions
        this.physics.add.overlap(this.player, this.collectables, this.collectCollectables, null, this);
        this.physics.add.overlap(this.player, this.crown, this.winGame, null, this);
        this.physics.add.overlap(this.player, this.oil, this.oilBurn, null, this);
        this.physics.add.overlap(this.player, this.seasoning, this.hitSeasoning, null, this);
    }

    update() {
        //Moving PotatoMan
        if (this.gameOver) {
            return;
        }

        if (this.cursors.left.isDown || this.keys.A.isDown) {
            this.player.setVelocityX(-150);
            this.player.anims.play('left', true);

        } else if (this.cursors.right.isDown || this.keys.D.isDown) {
            this.player.setVelocityX(150);
            this.player.anims.play('right', true);

        }  else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }

        if (this.spaceBar.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-250);
        }

        //Moving Oil
        this.oil.create(625, this.oilY, 'oil');
        if (this.oilY != 423) {
            this.oilY -= 0.2;
        }

    }

    /* Spawns Falling Seasoning */
    spawnSeasoning() {
        let x = Phaser.Math.Between(85, 1165);
        let sAndp = this.seasoning.create(x, 10, 'seasoning');
        sAndp.setCollideWorldBounds(true);
        sAndp.setVelocityY(-1);
    }

    /* Potato Collection -> score increase and seasoning call */
    collectCollectables(player, collectable) {
        collectable.disableBody(true, true);

        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);

        this.time.delayedCall(3000, this.spawnSeasoning, [], this);
    }

    /* End Game When Fall in Oil */
    oilBurn() {
        this.gameOver = true;
        this.physics.pause();
        this.player.setTexture('cookedPotato');

        this.scene.start('DieScene', this.score);
        this.scene.stop();
    }

    /* Win Game When Reach Crown */
    winGame() {
        this.physics.pause();
        this.gameOver = true;
        this.player.setTexture('kingPotato');

        this.scene.start('WinScene', this.score);
        this.scene.stop();
    }

    /* Seasoning Impact -> minus score */
    hitSeasoning(player, seasoning) {
        seasoning.disableBody(true, true);
        player.setTint(0xff0000);
        this.time.delayedCall(100, this.tintBeGone, [], this);
        this.score -= 5;
        this.scoreText.setText('Score: ' + this.score);
    }

    /* Clears Tint from Seasoning Hit */
    tintBeGone() {
        this.player.clearTint();
    }

    /* Button Functions */
    hoverPauseButton() {
        this.pauseButton.setTexture('pauseButtonHover');
    }
    unhoverPauseButton() {
        this.pauseButton.setTexture('pauseButton');
    }
    clickPauseButton() {
        this.scene.switch('PauseScene');
    }

}