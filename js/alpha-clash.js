// function play() {
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  //   console.log('player pressed',playerPressed);

    if (playerPressed === 'Escape') { 
        gameOver();
    }
    
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(expectedAlphabet);

  if (playerPressed === expectedAlphabet) {
    console.log("Pressed Right one");
    //   const currentScoreElement = document.getElementById('current-score');
    //   const currentScore = currentScoreElement.innerText;
    //   const score = parseInt(currentScore);
    //   const updatedScore = score + 1;
    //   currentScoreElement.innerText = updatedScore;
    //   console.log(updatedScore);
    const currentScore = getElementValueById("current-score");
    const score = currentScore + 1;
    setElementTextById("current-score", score);

    removeBackgroundColor(expectedAlphabet);
    gameLoop();
  } else {
    console.log("You Missed You Lost A Life");
    //   const currentLifeElement = document.getElementById('current-life');
    //   const currentLifeText = currentLifeElement.innerText;
    //   const currentLife = parseInt(currentLifeText);

    //   const updatedLife = currentLife - 1;
    //   currentLifeElement.innerText = updatedLife;

    const currentLifeElement = getElementValueById("current-life");
    const currentLife = currentLifeElement - 1;
    setElementTextById("current-life", currentLife);

    if (currentLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function gameLoop() {
  const alphabet = randomAlphabet();
  //   console.log("random Alphabet ", alphabet);

  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  backGroundColor(alphabet);
}

function play() {
  hideElementById("home-section");
  hideElementById("final-score");
    showElementById("play-ground");
    setElementTextById('current-life', 5);
    setElementTextById('current-score', 0);
  gameLoop();
}

function gameOver() {
  hideElementById("play-ground");
    showElementById("final-score");
    const lastScore = getElementValueById('current-score');
    setElementTextById('last-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColor(currentAlphabet);
}
