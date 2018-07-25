
// Timer to control FPS
export class GameTimer {
    private accumulator: number;
    private tick: number;
    private lastTime: number;
    public frameId: any;
    
    constructor(private callback: any, private step: number = 1/120) {
        this.accumulator = 0;
        this.tick = 0;
        // this.callback = callback;        
        this.frameId = null;
        this.lastTime = 0;
    }    
    // public start() {
    //     this.lastTime = 0;        
    //     this.frameId = requestAnimationFrame(this.onFrame.bind(this));
    //     console.log("start", this.frameId);
    // }    
    // public stop() {        
    //     cancelAnimationFrame(this.frameId);
    //     console.log("end", this.frameId);
    // }
    // public onFrame(ms: number) {                        
    //     if (this.lastTime > 0) {              
    //         this.accumulator += (ms - this.lastTime) / 1000;

    //         while (this.accumulator > this.step) {
    //             this.callback.update(this.step, this.tick);
    //             this.tick++;
    //             this.accumulator -= this.step;
    //         }                   
    //     }
    //     this.lastTime = ms;
    //     this.callback.draw();
    //     requestAnimationFrame(this.onFrame.bind(this));
    // }
}
