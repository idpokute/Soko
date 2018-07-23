const CSceneIntro = require('./scene/scene_intro');
const CScenePlay = require('./scene/scene_play');
const CSceneTest = require('./scene/scene_test');
const CSceneTest2 = require('./scene/scene_test2');
const CSceneSide1 = require('./scene/scene_side1');

class SceneManager {
    constructor() {
        this.pause = false;    // This is for stop updating and redering. Need to change it in the new Scene.   
        this.currentScene = null;
        this.nextScene = null;
        this.prevScene = null;
        this.timer = timer;                        


        this.sceneMap = new Map();
    }
    add(sceneName, scene) {
      this.sceneMap.set(sceneName, scene)
    }
    change(scene) {
        this.nextScene = scene;                
    }
    update(inputState) { 
        if (this.nextScene) {
            this.pause = true;

            switch (this.nextScene) {                
                case 'intro':             
                    this.prevScene = this.currentScene;   
                    this.currentScene = new CSceneIntro(this.timer, this);
                    this.nextScene = null;
                break;
                case 'play':
                    this.prevScene = this.currentScene;
                    this.currentScene = new CScenePlay(this.timer, this);
                    this.nextScene = null;
                break;
                case 'test':
                    this.prevScene = this.currentScene;
                    this.currentScene = new CSceneTest(this.timer, this);
                    this.nextScene = null;
                break;
                case 'test2':
                    this.prevScene = this.currentScene;
                    this.currentScene = new CSceneTest2(this.timer, this);
                    this.nextScene = null;
                break;
                case 'side1': 
                    this.prevScene = this.currentScene;
                    this.currentScene = new CSceneSide1(this.timer, this);                    
                    this.nextScene = null;
                break;
                default:
                    this.currentScene = new CSceneTest(this.timer, this);
            }
        }
        
        if (this.currentScene && !this.pause) {
            this.currentScene.update(inputState);
        }        
    }
    draw(ctx) {
        // the app run draw every frame
        if (this.currentScene && !this.pause) {
            this.currentScene.draw(ctx);
        }        
    }
}

export default SceneManager