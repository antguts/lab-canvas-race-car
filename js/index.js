//canvas
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
//road
const roadImage = new Image() 
roadImage.src = 'images/road.png'
//car
const carImage = new Image() 
carImage.src = 'images/car.png'


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

// CREATE OBJECTS =============================================
//Car obj
let carObj = {
// Left most point is 80 and right most point is 380
  x: 150,
  y: 600,
  width:65,
  height:100,
  goLeft: function(){
    if(this.x>=80)
      this.x-=7;
  },
  goRight: function(){
    if(this.x<=380)
      this.x+=7;
  }
}

//Obst obj
let obst={
  obs1: {
    width: 200,
    height:50,
    y: 10,
    x: 80
  },
  obs2: {
    width: 30,
    height:50,
    y: -300,
    x: 80
  },
  obs3: {
    width: 10,
    height:50,
    y: -590,
    x: 200
  }
}

function obsticles(){
  ctx.fillStyle='red'
  for(property in obst){
    let curObj=obst[property]    
    if(curObj.y>=855){ 
      curObj.y=0
      curObj.width=Math.floor(Math.random()* (230 - 80) + 80)
      ctx.fillRect(curObj.x,curObj.y,curObj.width,curObj.height)
    } else {
      curObj.y+=3
      ctx.fillRect(curObj.x,curObj.y,curObj.width,curObj.height)
    }
  }
}





//keyboard input
function keyInput(e){
  var keyCode = e.keyCode;
  if(keyCode == 37){//left arrow
    // setInterval(carObj.goLeft(),100)
    carObj.goLeft()
    console.log("left: ",carObj.x)
  }
  if(keyCode == 39){//right arrow
    carObj.goRight()
    console.log("right: ",carObj.x)
  }
};

function updateBoard(){
  ctx.drawImage(roadImage,10,10,500,1500)
  ctx.drawImage(carImage,carObj.x,carObj.y,carObj.width,carObj.height)
}

function checkCollision(){

  for(property in obst){
    if (obst[property].x < carObj.x + carObj.width &&
      obst[property].x + obst[property].width > carObj.x &&
      obst[property].y < carObj.y + carObj.height &&
      obst[property].y + obst[property].height > carObj.y) {
          // collision detected!
          alert('Collision detected: Game Over')
          window.cancelAnimationFrame(id)
    }//end if
  }//end for
}//end function

let id=null
function animate(){
  id=window.requestAnimationFrame(animate)
  // obsticles.push(ctx.fillRect(80,0,100,40))
  // ctx.clesarRect(0,0,canvas.width,canvas.height)
  updateBoard()
  obsticles()
  checkCollision()
}
