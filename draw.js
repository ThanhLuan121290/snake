const ctx = document.getElementById("canvas").getContext("2d");
const scale = 10;
const rows = canvas.height /scale;
const columns = canvas.width /scale;
var snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  localStorage.setItem("score",0);
  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }

    snake.checkCollision();
    document.querySelector('.score').innerText = snake.total; 
    document.querySelector('.hightscore').innerText = localStorage.getItem('score')     
  }, 250);
}());

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));