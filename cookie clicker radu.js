let cookieCount = 0;
let cookiesPerSecond = 0;
let autoClickerCost = 10;
let doubleClickCost = 50;
let clickValue = 1;

const cookie = document.getElementById('cookie');
const cookieCountDisplay = document.getElementById('cookieCount');
const cpsDisplay = document.getElementById('cps');
const autoClickerButton = document.getElementById('autoClicker');
const doubleClickButton = document.getElementById('doubleClick');

// Update display
function updateDisplay() {
    cookieCountDisplay.textContent = cookieCount;
    cpsDisplay.textContent = cookiesPerSecond;
    autoClickerButton.disabled = cookieCount < autoClickerCost;
    doubleClickButton.disabled = cookieCount < doubleClickCost;
}

// Cookie click handler
cookie.addEventListener('click', () => {
    cookieCount += clickValue;
    updateDisplay();
});

// Auto Clicker
autoClickerButton.addEventListener('click', () => {
    if (cookieCount >= autoClickerCost) {
        cookieCount -= autoClickerCost;
        cookiesPerSecond += 1;
        autoClickerCost *= 2; // Increase cost
        setInterval(() => {
            cookieCount += 1;
            updateDisplay();
        }, 1000);
        updateDisplay();
    }
});

// Double Click
doubleClickButton.addEventListener('click', () => {
    if (cookieCount >= doubleClickCost) {
        cookieCount -= doubleClickCost;
        clickValue *= 2; // Double click value
        doubleClickCost *= 2; // Increase cost
        updateDisplay();
    }
});
