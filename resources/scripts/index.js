// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors(userName);

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = game.userName + ': ' + game.score.user + ' v CPU: ' + game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  const username = userName;
  game = new RockPaperScissors(username);
  // Complete
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
});

// go-button EventListener
goButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  const userChoice = userSelection.options.value;
  game.play(userChoice);
  scoreParagraph = updateScoreTallyUI();
  gameHistoryParagraph = updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });