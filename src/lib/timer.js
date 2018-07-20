// Timer to control FPS
class GameTimer {
    constructor(callback, step = 1/120) {
        this.accumulator = 0;
        this.tick = 0;
        this.callback = callback;
        this.step = step;        
        this.frameId = null;
    }    
    start() {
        this.lastTime = null;        
        this.frameId = requestAnimationFrame(this.onFrame.bind(this));
        console.log("start", this.frameId);
    }    
    stop() {        
        cancelAnimationFrame(this.frameId);
        console.log("end", this.frameId);
    }
    onFrame(ms) {                        
        if (this.lastTime) {              
            this.accumulator += (ms - this.lastTime) / 1000;

            while (this.accumulator > this.step) {
                this.callback.update(this.step, this.tick);
                this.tick++;
                this.accumulator -= this.step;
            }                   
        }
        this.lastTime = ms;
        this.callback.draw();
        requestAnimationFrame(this.onFrame.bind(this));
    }
}

export default GameTimer