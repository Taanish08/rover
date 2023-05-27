canvas=document.getElementById("djwalacanvas");
ctx=canvas.getContext("2d");
mars_array= ["1.jpg" , "2.jpg", "3.jpg", "4.jpg"];
 randoNum=Math.floor(Math.random()*4);
 console.log(randoNum);
rw=90;
rh=100;
bg=mars_array[randoNum];
ri="rover.png";
rX=10;
rY=10;

function add() {
    bgt=new Image();
    bgt.onload=uploadbg;
    bgt.src=bg;
    
    rit=new Image();
    rit.onload=uploadr;
    rit.src=ri;


}

function uploadbg() {
    ctx.drawImage(bgt,0,0,canvas.width,canvas.height);
}

function uploadr()
{
    ctx.drawImage(rit,rX,rY,rw,rh);
}

window.addEventListener("keydown",mykd);

function mykd(e) {
    keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=='37') {
    console.log("left");
left();
}

if(keypressed=='38') {
    console.log("up");
    up();
}

if(keypressed=='39') {
    console.log("right");
    right();
}

if(keypressed=='40') {
    console.log("down");
    down();
}
}


function up() {
    if(rY>=0) {
        rY=rY-30;
        uploadbg();
        uploadr();
    }
}

function down() {
    if(rY<=500) {
        rY=rY+30;
        uploadbg();
        uploadr();
    }
}

function left() {
    if(rX>=0) {
        rX=rX-30;
        uploadbg();
        uploadr();
    }
}

function right() {
    if(rX<=700) {
        rX=rX+30;
        uploadbg();
        uploadr();
    }
}



