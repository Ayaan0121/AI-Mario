function preload() {
	world_start = loadSound("world_start.wav");
	marioJump=loadSound("jump.wav");
	marioCoin=loadSound("coin.wav");
	gameOver=loadSound("gameover.wav");
	enemyKill=loadSound("kick.wav");
	marioDies=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent('console');
 	poseNet = ml5.poseNet(video, modelLoaded);
  	poseNet.on('pose', gotPoses);
	  
}

function modelLoaded(){
	console.log("model loaded!");
}

function gotPoses(results) {

	if (results.length > 0) {
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
	
}

function draw() {
	game()
	
}






