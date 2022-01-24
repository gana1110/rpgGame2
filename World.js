let tableauPositions = [0,32,64,96,128,160,192,224,256,288];
let largeur = 32;
class World {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  loadImages(listImages, callback) {
    var nbImagesLoaded = 0;
    listImages.forEach(img => {
      img.onload = () => {
        nbImagesLoaded++;
        if(nbImagesLoaded == listImages.length) {
          callback();
        }
      };
    });
  }
  
  init(){  
    
    // creation Background       
    const backgroundImage = new Image();
    backgroundImage.src = "./DemoLower.png" ;

    // creation ombre
    const shadow = new Image();
    shadow.src = "./shadow.png" ; 

    // creation du personnage
    const hero = new Image();
    hero.src = "./me.png";

    this.loadImages([backgroundImage, shadow, hero], () => {
      // Draw background
      this.ctx.drawImage(backgroundImage,0,0);
      // Draw shadow
      this.ctx.drawImage(shadow,0,0,32,32,52,62,32,32)
      // Draw hero
      this.ctx.drawImage(hero,0,0,18,23,60,60,18,23)
    });
  }
}



