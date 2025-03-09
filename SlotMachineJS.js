//Recieve click of bet amount
//Increase available to play
//Initiate Spin
//Use random math with conditional function
//Create rules for win or loss
//Display result to corresponding box
//Update winnings, current balance, and available to play
//Start with 1k


let startingBalance = 1000;
let balance = startingBalance;
let minbet = 50;
let maxbet = 100;
let currentBet = 0;

document.getElementById('minbet').addEventListener('click', minBet);
document.getElementById('maxbet').addEventListener('click', maxBet);
document.getElementById('spin').addEventListener('click', spinReels);

    function minBet() {
        balance = balance -= minbet;
        if (balance >= minbet) {
            spinReels();
        } else {
            alert("Insufficient balance for minimum bet.");
        }
        document.querySelector('#balance').innerText = balance
    } 
    
    function maxBet () {
        balance = balance -= maxbet;
        if (balance >= maxbet) {
            spinReels();
        } else {
            alert("Insufficient balance for maximum bet.");
        }
        document.querySelector('#balance').innerText = balance
    }

    function spinReels() {
        let randomOne = Math.floor(Math.random() * 5);
        let randomTwo = Math.floor(Math.random() * 5);
        let randomThree = Math.floor(Math.random() * 5);
    
        document.getElementById('reelOne').innerText = randomOne;
        document.getElementById('reelTwo').innerText = randomTwo;
        document.getElementById('reelThree').innerText = randomThree;
    
        checkWin(randomOne, randomTwo, randomThree);
    }
    function checkWin(reelOne, reelTwo, reelThree) {
        if (reelOne === reelTwo && reelTwo === reelThree) {
            let winAmount = 3 * minbet || maxbet;
            balance += winAmount;
            alert("You win! New balance: " + winAmount);
        } else {
            alert("You lose! Try again.");
        }
    }