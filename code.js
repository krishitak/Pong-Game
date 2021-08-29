var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="purple";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="blue";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="black";
    ball.velocityX=2;
        ball.velocityY=3;

function draw() {
  background(220);
  
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-20;
  }
  if (keyDown("down")) {
    playerPaddle.y = playerPaddle.y - -20;
  }
  if (keyDown("w")) {
    computerPaddle.y = computerPaddle.y - 20;
  }
  if (keyDown("s")) {
    computerPaddle.y = computerPaddle.y - -20;
  }
  
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawnet();
  start();
  drawSprites();
  
}
function drawnet() {
  for (var k = 0; k < 400; k=k+20) {
    line(200, k, 200, k+10);
  }
}
function start() {
  if (keyDown("space")) {
    ball = 6;
    ball.velocityX = 4;
  }
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
