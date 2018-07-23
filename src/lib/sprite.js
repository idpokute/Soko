/** 
 * Thi class load image
*/
class Sprite {
  constructor(image, width, height) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.tile = new Map();        
  }
  define(name, x, y, width, height) {
    let buffers = [false, true].map((flip) => {
      const buffer = document.createElement('canvas');
      buffer.width = width;
      buffer.height = height;
      const ctx = buffer.getContext('2d');

      if (flip) {
          ctx.scale(-1, 1);
          ctx.translate(-width, 0)
      }
      ctx.drawImage(this.image, x, y, width, height, 0, 0, width, height);

      return buffer;
    });

    this.tile.set(name, buffers);        
  }
  defineAnim(name, animation) {
    this.animation.set(name, animation);
  }
  defineTile(name, x, y) {
    this.define(name, x, y, this.width, this.height);
  }
  
  draw(name, context, x, y, flip = false) {
    const buffer = this.tile.get(name)[flip ? 1: 0];
    context.drawImage(buffer, x, y);
  }
  drawAnim(name, context, x, y, distance) {
    const anim = this.anim.get(name);
    this.drawTile(anim(distance), context, x, y);
  }
  drawTile(name, context, x, y) {
    this.draw(name, context, x * this.width, y * this.height)
  }
}

export default Sprite