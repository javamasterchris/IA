window.onload = initAll;
var canvas;
var ctx;
var imgObj;
var imgObj2;
var imgObj3;
var x = 100;
var y = 90;
var X = 300;
var Y = 85;
var R;
var xSpeed = 3;
var ySpeed = 2;
var velUp;
var gravity;
var xpos = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
var ypos = [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90];
var xval = 3;
var xSpeedbar = [xval, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ySpeedbar = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var imageX = 350 ;
var imageX2 = 280;
var imageY = 455;
var imageY2 = 10;
var imageX3= 350;
var imageY3= 50;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;
var barrelSize = 8;
var answered = false;
var interval;
var interval2;
var counter = 0;
var vol = 5.5;
var level = 1;
var lives1 = 3;
var integer1;
var integer2;

interval = setInterval(menu, 10);

function initAll()
{
   canvas = document.getElementById("myCanvas");
   ctx = canvas.getContext("2d");
   document.addEventListener("keydown",keyDownHandler,false);
   document.addEventListener("keyup",keyUpHandler,false);
   document.addEventListener("mouseup", mouseUpHandler, false);

   // l1=true;
   menu();
   play();

}
function menu()
{
   ctx.clearRect(0,0, canvas.width, canvas.height);
   ctx.fillStyle = "black";
   ctx.fillRect(0,0,canvas.width, canvas.height);
   if(rightPressed == true)
   {
       clearInterval(interval);
       interval = setInterval(play, 10);
   }
   ctx.beginPath();
   ctx.fillStyle = "white";
   ctx.font = "30px Courier";
   ctx.fillText("Press right arrow key to start playing Donkey Kong", 10, 300);
  
   ctx.closePath;
}
function questions()
{
   ctx.clearRect(0,0,canvas.width,canvas.height);
   ctx.fillStyle = "black";
   ctx.fillRect(0,0,canvas.width, canvas.height);
   ctx.fillStyle = "white";
   generateQuestion();
   if(answered == true)
    {
        clearInterval(interval);
        interval = setInterval(play, 10);
        imgObj.style.visibility = 'hidden';
        imgObj2.style.visibility = 'hidden ';
        imgObj3.style.visibility = 'hidden';
      
        xSpeedbar = [xval,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        ySpeedbar = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        xpos = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100;
        ypos = [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90];
        imageX = 350;
        imageY = 455;
    }
}
function generateRandomNumbers()
{
    integer1 = Math.floor((Math.random() * 100)+1);
    integer2 = Math.floor((Math.random() * 100)+1);
}
function generateQuestion()
{
    var correct = integer1 + integer2;
    var incorrect1 = integer1 + integer2 + 19;
    var incorrect2 = integer1 + integer2 + 80;
    var incorrect3 = integer1 + integer2 -18;
        
    ctx.fillStyle = "#ffffff";
    ctx.font = "30px Arial";
    ctx.fillText(integer1 +"" + "+" + integer2+"" +"?", 440, 100);

    ctx.fillText("A)" + correct + "", 100,150);
    ctx.fillText("B)" + incorrect1 + "", 100, 250);
    ctx.fillText("C)" + incorrect2 + "", 100, 350);
    ctx.fillText("D)" + incorrect3 + "", 100, 450);
}
function play()
{
   imgObj = document.getElementById('myImage');
   imgObj.style.position = 'absolute';
   imgObj.style.visibility = 'visible';
   imgObj.style.left = '50 px'; //x position
   imgObj.style.top = '50 px'; // y position

   imgObj2 = document.getElementById('myImage2');
   imgObj2.style.position = 'absolute';
   imgObj2.style.visibility = 'visible';
   imgObj2.style.left = '50 px';
   imgObj2.style.top = '50 px';

   imgObj3 = document.getElementById("myImage3");
   imgObj3.style.position = 'absolute';
   imgObj3.style.visibility = 'visible';
   imgObj3.style.left = '50 px';
   imgObj3.style.top = '50 px';
   imgObj.style.left = imageX + 'px';
   imgObj.style.top = imageY + 'px';

   imgObj2.style.left = imageX2;
   imgObj2.style.top = imageY2;

   imgObj3.style.left = imageX3;
   imgObj3.style.top = imageY3;
   ctx.clearRect(0,0,canvas.width,canvas.height);
   answered=false;
   drawRows();
   drawLadder();
   drawBarrel();
   lives();
   collision();
   youLose();
   score();
   win();
   console.log(imageY);

   if(rightPressed == true && imageY == 455 && imageX<1050 || rightPressed == true && imageY == 455 - 130 &&imageX< 1000 || 
    rightPressed == true && imageX< 1050 && imageY == 455 -  130 - 130|| rightPressed == true && imageX< 1000 && imageY == 455 - 130 - 130- 130) //Right Movement, First row
   {
       imageX+=xSpeed;
   }

   if(leftPressed == true && imageY == 455 &&imageX>300 || imageY == 455 - 130 &&leftPressed == true && imageX>250 || 
    leftPressed == true && imageX>285 && imageY == 455 - 130 -130 || leftPressed == true && imageX> 430 && imageY == 455 -130-130-130) //Left Movement, First Row
   {
       imageX-=xSpeed;
   }

   if(upPressed == true && imageX>= 780 && imageX<= 800  && imageY>= 455-128 || upPressed == true && imageX>= 280 && 
    imageX<= 314 && imageY>=455 - 258 && imageY <=455-128|| upPressed == true && imageX>= 830 && imageX<=865 && imageY>= 455 - 388&& imageY<= 455-128-128) //Up first ladder, Second ladder
   {
       imageY-=ySpeed;
   }
  
   if(downPressed == true && imageX>=780 && imageX<= 800 && imageY<=455-1 && imageY>= 455-130 || downPressed == true && imageX>= 280 && imageX<=314 && 
    imageY <= 455-130-1 || downPressed == true && imageX>= 830 && imageX<=865 && imageY <= 455-130-130-1)//Down Movement
   {
       imageY+=ySpeed;
   }
  
    if(spacePressed==true && imageX<1050 && imageY>=400)//for the y part, find the regular y position and subtract 55 //find specific y value of mario using math and then set l1, l2, or l3 equal to true when mario is on a lvl
   {
       vol-=0.3;
       imageY-= vol;   
        if(imageY >= 450 )
        {
            spacePressed = false;
            imageY = 455;
            vol =5.5;
        }
   }
   else if(spacePressed == true && imageX<1000 && imageY>=455-130-55)
   {
       vol-=0.3;
       imageY-=vol;
       if(imageY >= 455-130-5)
       {
           spacePressed = false;
           imageY = 455 -130;
           vol = 5.5
       }
   }
   else if(spacePressed == true && imageX<1050 && imageY>455-130-130-55)
   {
       vol -=0.3;
       imageY-=vol;
       if(imageY>=455-130-130-5)
       {
           spacePressed = false;
           imageY = 455-130-130;
           vol = 5.5;
       }
   }
   else if (spacePressed == true && imageX<1050 && imageY>455-130-130-130-55)
   {
       vol -= 0.3;
       imageY-=vol;
       if(imageY>=455-130-130-130-5)
       {
           spacePressed = false;
           imageY = 455-130-130-130;
           vol = 5.5;
       }
   }
}
function drawLadder()
{
       ctx.beginPath();

       /* height 1 */ ctx.rect(600 , 360, 10, 145);
       /*height 2 */ ctx.rect(620, 360, 10, 145);

       //First Ladder
       ctx.rect(600, 380, 20, 10);
       ctx.rect(600, 400, 20, 10);
       ctx.rect(600, 420, 20, 10);
       ctx.rect(600, 440, 20, 10);
       ctx.rect(600, 460, 20, 10);
       ctx.rect(600, 480, 20, 10);

       //Second Ladder
       ctx.rect(100, 230, 10, 145);
       ctx.rect(120, 230, 10, 145);

       ctx.rect(100, 250, 20, 10);
       ctx.rect(100, 270, 20, 10);
       ctx.rect(100, 290, 20, 10);
       ctx.rect(100, 310, 20, 10);
       ctx.rect(100, 330, 20, 10);
       ctx.rect(100, 350, 20, 10);

       //Third Ladder
       ctx.rect(650, 100, 10, 145);
       ctx.rect(670,100, 10, 145);

       ctx.rect(650, 120, 20, 10);
       ctx.rect(650, 140, 20, 10);
       ctx.rect(650, 160, 20, 10);
       ctx.rect(650, 180, 20, 10);
       ctx.rect(650, 200, 20, 10);
       ctx.rect(650, 220, 20, 10);

       ctx.fillStyle = "white";
       ctx.fill();

       ctx.closePath();
}
function collision()
{
   for(var i = 0; i<xpos.length ; i++)
   {
       if(imageX-canvas.offsetLeft+33>xpos[i] && imageX-canvas.offsetLeft+33 <= xpos[i]+barrelSize && ypos[i]>imageY-canvas.offsetTop 
        && ypos[i]<=imageY-canvas.offsetTop+51)
       {
         generateRandomNumbers();
           clearInterval(interval);
           interval = setInterval(questions, 10);
           questions();
           imgObj.style.visibility = 'hidden';
           imgObj2.style.visibility = 'hidden';
           imgObj3.style.visibility = 'hidden';
           lives1--;
       }
   }
}
function youLose()
{
    if(lives1 == 0)
    {
        alert("YOU LOSE");
        
    }
}
function drawRows()
{
       ctx.beginPath();
       for(var i = 0;i<4; i=i+2)
       {
           ctx.rect(50, (100 + (130* i)), canvas.width-200,15);
           ctx.fillStyle = "red";
       }
       for(var i = 1; i<4; i = i+2)
       {
           ctx.rect(100,(100+ (130*i)), canvas.width-200,15);
           ctx.fillStyle = "red";
       }
       ctx.fill();
       ctx.closePath();
}
function drawBarrel()
{
   for(var i = 0; i<xpos.length;i++)
   {
       ctx.beginPath();
       ctx.fillStyle = "tan";
       ctx.arc(xpos[i], ypos[i], barrelSize, 0, Math.PI *2)
       ctx.fill();
       ctx.closePath();
       xpos[i]+=xSpeedbar[i];
       ypos[i]+=ySpeedbar[i];

       if(ypos[i]>=350 && ypos[i]<=365)
       {
           xSpeedbar[i] = xval;
           ySpeedbar[i]=0;
       }
       if(xpos[i]>=860)
       {
           xSpeedbar[i]=0;
           ySpeedbar[i] = xval;
           xpos[i] = 859;
       }
       if(ypos[i]>=220 && ypos[i]<=235)
       {
           xSpeedbar[i] = -xval;
           ySpeedbar[i] = 0;
       }
       if(xpos[i]<=90)
       {
           xSpeedbar[i] = 0;
           ySpeedbar[i] = 3;
           xpos[i] = 91;
       }
       if(ypos[i]>=480 && ypos[i]<=495)
       {
           xSpeedbar[i] = -xval;
           ySpeedbar[i] = 0;
       }
       if(xpos[i] == 400)
       {
           xSpeedbar[i+1] = xval;
       }
      
   }
  
}
function score()
{
    ctx.fillText("Level: " + level, 500 , 50);
}
function lives()
{
    ctx.fillText("Lives: " + lives1, 700 , 50);
}
function win()
{
    if(imageX < 450 && imageY == 455-130-130-130)
    {
        level++;
        imageX = 350;
        imageY =455;
        xval = xval + 2;
        ySpeedbar = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        xSpeedbar = [xval, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        ypos = [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90];
        xpos = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
        imageX = 350;
        imageY = 455;
    }
}
function keyDownHandler(e) //when you press down on the button
{
   if(e.keyCode == 37)
   {
       leftPressed = true;
   }
   if(e.keyCode == 39)
       rightPressed = true;


   if(e.keyCode == 38)
   {
       upPressed = true;
   }

   if(e.keyCode == 40)
   {
       downPressed = true;
   }
  
   if(e.keyCode == 32)
   {
       spacePressed = true;
   }
}
function keyUpHandler(e) //when you let go of button
{
    if(e.keyCode == 37)
    {
    leftPressed = false;
    }

    if(e.keyCode == 39)
    rightPressed = false;

    if(e.keyCode == 38)
    upPressed = false;

    if(e.keyCode == 40)
    downPressed = false;
}
function printMousePos(event) 
{
   document.body.textContent =
     "clientX: " + event.clientX +
     " - clientY: " + event.clientY;
     document.addEventListener("click", printMousePos);
}
function mouseUpHandler(e)
 {
     x1 = e.clientX - canvas.offsetLeft;
     y1 = e.clientY - canvas.offsetTop;
     if(x1 > 55 && y1<180 && y1 > 125) //change when correct answer is on the screen
     {
        answered = true;
     }


}