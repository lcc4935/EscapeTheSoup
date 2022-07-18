/**
 * Lauren Casale
 * Main
 */

import {TitleScene} from './classes/titleScene.js';
import {InstructionsScene} from './classes/instructionsScene.js';
import {WinScene} from './classes/winScene.js';
import {DieScene} from './classes/dieScene.js';
import {PauseScene} from './classes/pauseScene.js';
import {GameScene} from './classes/gameScene.js';

let titleScene = new TitleScene();
let instructionsScene = new InstructionsScene();
let winScene = new WinScene();
let dieScene = new DieScene();
let pauseScene = new PauseScene();
let gameScene = new GameScene();

let config = {
    type: Phaser.AUTO,
    width: 1250,
    height: 750,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};


let game = new Phaser.Game(config);

game.scene.add("TitleScene", titleScene);
game.scene.start("TitleScene");
game.scene.add("InstructionsScene", instructionsScene);
game.scene.add("WinScene", winScene);
game.scene.add("DieScene", dieScene);
game.scene.add("PauseScene", pauseScene);
game.scene.add("GameScene", gameScene);