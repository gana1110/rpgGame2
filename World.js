let tableauPositions = [0,32,64,96,128,160,192,224,256,288];
let largeur = 32;
class World {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init(){  
    
    // creation Background       
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image,0,0)
    };
    image.src = "./DemoLower.png" ;
    console.log("Background");

    // creation ombre
    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(shadow,0,0,32,32,52,62,32,32)
    };
    shadow.src = "./shadow.png" ; 
    console.log("Shadow");
    
    // creation du personnage
    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(hero,0,0,18,23,60,60,18,23)};
    hero.src = "./me.png";
    console.log("Hero");
  }
}



