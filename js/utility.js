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
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const elementValue = parseInt(elementValueText);
  return elementValue;
}

function setElementTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) { 
  const element = document.getElementById(elementId);
  const text = element.innerText;

  return text;
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
