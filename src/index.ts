// import Util from './lib/util';
import { GameTimer } from './lib/timer';
// import Sprite from './lib/sprite';

class Game {
    private _canvas: any;    
    private _timer: any;
    public ctx: any;
    public finishLoading = false;


    constructor() {
        this._canvas = document.getElementById('canvas');
        this._canvas.width = 640;
        this._canvas.height = 480;  
        this.ctx = this._canvas.getContext('2d');        
        
        this._timer = new GameTimer(this, 1/60);

        this.finishLoading = false;
        // Promise.all([
        //     // Util.loadImage('./src/media/image/sokoban_tilesheet.png'),
        //     // Util.loadImage('./src/media/image/char.png'),
        // ]).then(([res1, res2]) => {
            
        //     // this.tiles = new Sprite(res1, 64, 64);
        //     // this.tiles.define('none', 11*64, 6*64, 64, 64);
        //     // this.tiles.define('ground', 1*64, 0, 64, 64);            
        //     // this.tiles.define('box', 2*64, 0, 64, 64);            
        //     // this.tiles.define('ice', 3*64, 0, 64, 64);
        //     // this.tiles.define('goal',0*64, 3 * 64, 64, 64);
        //     // this.tiles.define('goal-on',1*64, 3 * 64, 64, 64);
        //     // this.tiles.define('player-idle', 0, 4*64, 64, 64);

        //     console.log('resolved')
        //     // this.timer.start();
        // });
        // this._timer.start();
        console.log('init');
    }

    // public update(dt: number, tick: number) {                
    //     // this.sceneManager.update(this.inputState);
        
    // }

    // public draw(){        
    //     this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        
    //     this.ctx.beginPath();
    //     this.ctx.rect(0, 0, 640, 480);
    //     this.ctx.fillStyle = "#eee";
    //     this.ctx.fill();    
    //     this.ctx.closePath();

    //     // this.tiles.draw('box', this.ctx, 0, 0);
        
    //     // this.sceneManager.draw(this.ctx);
    // }
}
let game = new Game();