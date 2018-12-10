"use strict";

var gameLevel = 1;
var highestScore = 1;

var Enemy = function Enemy(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'src/images/enemy-bug.png';
};

Enemy.prototype.update = function (dt) {
  if (this.x > 500) {
    this.x = -200;
  }

  ;
  this.x = this.x + gameLevel + Math.floor(Math.random() * 5 + 1) * 40 * dt;
};

Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

  if (this.x + 70 > player.x && this.x < player.x + 70 && player.y + 50 > this.y && this.y + 50 > player.y) {
    player.y = 380;
    gameLevel = 1;
    document.getElementById('level-number').innerHTML = "<h2>Level ".concat(gameLevel, "</h2>");
  }

  ;
};

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'src/images/char-pink-girl.png';
}

Player.prototype.update = function (dt) {
  if (this.y < 40) {
    this.y = 380;

    if (highestScore === gameLevel) {
      ++highestScore;
    }

    ;
    ++gameLevel;
    document.getElementById('level-number').innerHTML = "<h2>Level ".concat(gameLevel, "</h2>");
    document.getElementById('highest-score').innerHTML = "<h2>Highest Score = ".concat(highestScore, "</h2>");
  }
};

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}; // conditions for the movement of player


Player.prototype.handleInput = function (el) {
  if (el === 'up' && this.y >= 40) {
    this.y -= 83;
  } else if (el === 'down' && this.y < 380) {
    this.y += 83;
  } else if (el === 'left' && this.x > 90) {
    this.x -= 100;
  } else if (el === 'right' && this.x <= 300) {
    this.x += 100;
  }

  this.render();
};

var allEnemies = [];
var player = new Player(200, 380);
var enemy1 = new Enemy(-500, 50);
var enemy2 = new Enemy(-50, 140);
var enemy3 = new Enemy(-300, 225);
allEnemies.push(enemy1, enemy2, enemy3);
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});