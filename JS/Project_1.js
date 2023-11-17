

    let myGamePiece;
    let myObstacle;

    function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myObstacle  = new component(150, 30, "green", 150, 120);
    myObstacle2  = new component(20, 30, "green", 15, 12);
    myGameArea.start();
}

    let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
},
    clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
},
    stop : function() {
    clearInterval(this.interval);
}
}

    function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
    this.crashWith = function(otherobj) {
    let myleft = this.x;
    let myright = this.x + (this.width);
    let mytop = this.y;
    let mybottom = this.y + (this.height);
    let otherleft = otherobj.x;
    let otherright = otherobj.x + (otherobj.width);
    let othertop = otherobj.y;
    let otherbottom = otherobj.y + (otherobj.height);
    let crash = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
    crash = false;
}
    return crash;
}
}

    function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle)) {
    alert("you have been crashing");
    myGameArea.stop();
} else {
    myGameArea.clear();
    myObstacle.update();
    myGamePiece.x += myGamePiece.speedX;
    myGamePiece.y += myGamePiece.speedY;
    myGamePiece.update();
}
}

    function moveup() {
    myGamePiece.speedY = -1;
}

    function movedown() {
    myGamePiece.speedY = 1;
}

    function moveleft() {
    myGamePiece.speedX = -1;
}

    function moveright() {
    myGamePiece.speedX = 1;
}

    function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}
