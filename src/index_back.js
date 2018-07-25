import Util from './lib/util';
import SpriteSheet from './media/image/char.png';
import GameTimer from './lib/timer';
import Sprite from './lib/sprite';


class Game {
    constructor() {
        this.canvas = document.getElementById('canvas')        
        this.canvas.width = 640;
        this.canvas.height = 480;  
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillRect(25, 25, 100, 100);
        
        this.timer = new GameTimer(this, 1/60);

        this.finishLoading = false;
        Promise.all([        
            Util.loadImage('./src/media/image/sokoban_tilesheet.png'),
            Util.loadImage('./src/media/image/char.png'),
        ]).then(([res1, res2]) => {
            
            this.tiles = new Sprite(res1, 64, 64);
            this.tiles.define('none', 11*64, 6*64, 64, 64);
            this.tiles.define('ground', 1*64, 0, 64, 64);            
            this.tiles.define('box', 2*64, 0, 64, 64);            
            this.tiles.define('ice', 3*64, 0, 64, 64);
            this.tiles.define('goal',0*64, 3 * 64, 64, 64);
            this.tiles.define('goal-on',1*64, 3 * 64, 64, 64);
            this.tiles.define('player-idle', 0, 4*64, 64, 64);

            console.log('resolved')
            this.timer.start();
        });
        console.log('init');
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

        this.tiles.draw('box', this.ctx, 0, 0);
        
        // this.sceneManager.draw(this.ctx);
    }
}
let game = new Game();