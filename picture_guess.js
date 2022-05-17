window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("bears");
  ctx.drawImage(img, 200, 200);
};

function cover_image(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    for (let y = 200; y < canvas.height; y+=100){
        for(let x = 200; x < canvas.width; x+=100){
            ctx.fillStyle = "black";
            ctx.fillRect(x, y, 100, 100);  
        }
    }
    setInterval(remove_blocker, 250)
}

function remove_blocker(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // ctx.fillStyle = "rgba(0, 0, 200, 0)";
    ctx.clearRect(Math.floor(Math.random()*canvas.width), Math.floor(Math.random()*canvas.height), 25, 25);  
    console.log("wow")
}