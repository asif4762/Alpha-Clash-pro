// function play() {
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function gameLoop() {
    const alphabet = randomAlphabet();
    console.log('random Alphabet ', alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    backGroundColor(alphabet);
}

function play() {
    hideElementById('home-section');
    showElementById('play-ground');
    gameLoop();
}