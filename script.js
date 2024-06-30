const symbols = ['🔥', '👕', '🐢', '⭐', '🎉'];
const reels = [
    document.getElementById('reel1'),
    document.getElementById('reel2'),
    document.getElementById('reel3')
];
const spinButton = document.getElementById('spinButton');
const resultDisplay = document.getElementById('result');

spinButton.addEventListener('click', spinReels);

function spinReels() {
    let result = [];
    for (let i = 0; i < reels.length; i++) {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        reels[i].textContent = randomSymbol;
        result.push(randomSymbol);
    }
    checkResult(result);
}

function checkResult(result) {
    if (result[0] === result[1] && result[1] === result[2]) {
        resultDisplay.textContent = '🎉 You Win 10% off!🎉 Send TRT10 to @betartle';
    } else {
        resultDisplay.textContent = 'Try Again! Get It Right!!!';
    }
}
