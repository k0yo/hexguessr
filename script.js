import { deltaE2000, hexToRgb } from './ciede2000.js';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const body = document.body;
const guessInput = document.getElementById('guessInput');
const actionButton = document.getElementById('actionButton');
const resultContainer = document.getElementById('resultContainer');
const resultDiv = document.getElementById('result');
const actualColorBox = document.getElementById('actualColor');
const guessedColorBox = document.getElementById('guessedColor');

let currentColor = '';
let isGuessing = true;

function initGame() {
    currentColor = getRandomColor();
    body.style.backgroundColor = currentColor;
    guessInput.value = '';
    resultContainer.classList.add('hidden');
    actionButton.textContent = 'Guess';
    isGuessing = true;
}

actionButton.addEventListener('click', function() {
    if (isGuessing) {
        const userGuess = guessInput.value.trim().toUpperCase();
        
        if (!/^#[0-9A-F]{6}$/i.test(userGuess)) {
            resultDiv.textContent = 'Please enter a valid hex color (e.g., #RRGGBB)';
            resultContainer.classList.remove('hidden');
            return;
        }
        
        const actualRgb = hexToRgb(currentColor);
        const guessedRgb = hexToRgb(userGuess);
        const difference = deltaE2000(actualRgb, guessedRgb);
        
        actualColorBox.style.backgroundColor = currentColor;
        guessedColorBox.style.backgroundColor = userGuess;
        resultDiv.textContent = `Color difference: ${difference.toFixed(2)} (lower is better)`;
        resultContainer.classList.remove('hidden');
        actionButton.textContent = 'Next';
        isGuessing = false;
    } else {
        initGame();
    }
});

guessInput.addEventListener('input', function() {
    let value = this.value.toUpperCase();
    if (value.length > 0 && value[0] !== '#') {
        value = '#' + value;
    }
    value = value.replace(/[^#0-9A-F]/g, '');
    if (value.length > 7) {
        value = value.substring(0, 7);
    }
    this.value = value;
});

initGame();