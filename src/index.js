import SpriteSheet from './media/image/char.png';
import GameTimer from './lib/timer';

class Game {
    constructor() {
        this.canvas = document.getElementById('canvas')        
        this.canvas.width = 640;
        this.canvas.height = 480;  
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillRect(25, 25, 100, 100);
        
        this.timer = new GameTimer(this, 1/60);
        this.timer.start();
    }

    update(dt, tick) {                
        // this.sceneManager.update(this.inputState);
    }

    draw(){        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.beginPath();
        this.ctx.rect(0, 0, 640, 480);
        this.ctx.fillStyle = "#eee";
        this.ctx.fill();    
        this.ctx.closePath();            

        // this.sceneManager.draw(this.ctx);
    }
}
let game = new Game();