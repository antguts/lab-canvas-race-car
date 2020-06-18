const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

document.getElementById('start-button').onclick = () => {
  startGame();
  animate()
};

// FILL THE CANVAS =============================================
function startGame() {
  ctx.fillStyle = 'green'
  ctx.fillRect(10,10,1000,1000)
  updateBoard()
}//end startGame

// CREATE OBJ =============================================


let carObj = {
// Left most point is 80 and right most point is 380
  leftRight: 150,
  goLeft: function(){
    if(this.leftRight>=80)
      this.leftRight-=3;
  },
  goRight: function(){
    if(this.leftRight<=380)
      this.leftRight+=3;
  }
}




//keyboard input
function keyInput(e){
  var keyCode = e.keyCode;
  if(keyCode == 37){//left arrow
    // setInterval(carObj.goLeft(),100)
    carObj.goLeft()
    console.log("left: ",carObj.leftRight)
  }
  
  if(keyCode == 39){//right arrow
    carObj.goRight()
    console.log("right: ",carObj.leftRight)
  }
  // updateBoard()
};

function updateBoard(){
    //road
    let roadImage = new Image() 
    roadImage.src = 'images/road.png'
    roadImage.onload = function(e){
      ctx.drawImage(roadImage,10,10,500,1000)
    }
  
    //car
    let carImage = new Image() 
    carImage.src = 'images/car.png'
    carImage.onload = function(e){
      ctx.drawImage(carImage,carObj.leftRight,600,65,100)
    }
}



let obsticles=[]

function animate(){
  window.requestAnimationFrame(animate)
  obsticles.push(ctx.fillRect(80,0,100,40))
  // ctx.clesarRect(0,0,canvas.width,canvas.height)
  updateBoard()
}
