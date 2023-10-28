let userInput = document.getElementById("userInput");
    let game = document.getElementById("gameResult");
    let randomNumber = Math.ceil(Math.random() * 100);

    function checkGuess() {
      let value = parseInt(userInput.value)
      if (randomNumber > value) {
        game.textContent = "You are too low";
        game.style.backgroundColor = "blue";
      }
      else if (randomNumber == value) {
        game.textContent = "Congratulation!!! You won";
        game.style.backgroundColor = "green";
      }
      else if (randomNumber < value) {
        game.textContent = "You are too high";
        game.style.backgroundColor = "blue";
      }
      else {
        game.textContent = "Invalid key";
        game.style.backgroundColor = "red";
      }
    }