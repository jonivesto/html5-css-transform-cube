var drag = false;
var x = 0;
var y = 0;

var startPosX = 0;
var startPosY = 0;

var rotX = 0;
var rotY = 0;

function Generate(){
    var x = document.getElementsByClassName("face");   
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < 100; j++) {
            x[i].innerHTML += "<div class='sub-face'></div>";
        }
    }
}

function Track(p){
    if(drag){
        x = p.pageX - startPosX;
        y = p.pageY - startPosY;
        document.getElementById('info').innerHTML = 'Mouse X : ' + p.pageX + '<br />Mouse Y : ' + p.pageY;

        
    
        document.getElementById("container").style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)"; 
     }
}

function Drag(bool){
    drag = bool;

    if (drag) {
        startPosX = x;
        startPosY = y;
    }
}
addEventListener('mousemove', Track, false);