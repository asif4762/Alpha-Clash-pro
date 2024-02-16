function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
};

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function backGroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColor(elementId) { 
    
}

function randomAlphabet() {
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetsString.split('');
    // console.log(alphabets);
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);
    const alphabet = alphabets[index];
    // console.log(alphabet);
    return alphabet;
}
