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

// CREATE OBJECTS =============================================
//Car obj
let carObj = {
// Left most point is 80 and right most point is 380
  leftRight: 150,
  goLeft: function(){
    if(this.leftRight>=80)
      this.leftRight-=5;
  },
  goRight: function(){
    if(this.leftRight<=380)
      this.leftRight+=5;
  }
}

//Obst obj
let obst={
  obs1: {
    width: 0,
    height: 0,
    side: 80
  },
  obs2: {
    width: 0,
    height: -290,
    side: 80
  },
  obs3: {
    width: 0,
    height: -580,
    side: 200
  }
}

function obsticles(){
  ctx.fillStyle='red'
  for(property in obst){
    let curObj=obst[property]
    
    if(obst[property].height>=855){ 
      curObj.height=0
      curObj.width=Math.floor(Math.random()* (270 - 80) + 80)
      ctx.fillRect(curObj.side,curObj.height,curObj.width,40)
    } else {
      curObj.height+=3
      ctx.fillRect(curObj.side,curObj.height,curObj.width,40)
    }
  }
 
  
  // ctx.fillRect(80,obst.obs2.height,obst.obs2.width,40)
  // ctx.fillRect(80,obst.obs3.height,obst.obs3.width,40)
  // ctx.fillRect(80,obst.obs4.height,obst.obs4.width,40)
  // ctx.fillRect(80,obst.obs5.height,obst.obs5.width,40)


}

// ctx.drawImage(carObj.leftRight,600,65,100)




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



// let obsticles=[]

function animate(){
  window.requestAnimationFrame(animate)
  // obsticles.push(ctx.fillRect(80,0,100,40))
  // ctx.clesarRect(0,0,canvas.width,canvas.height)
  obsticles()
  updateBoard()
}
