

const score = (rolls) => {

    rollsLength = (rolls[19] === 10) ? 19 : 20;
    let newRolls = rolls.splice(0, rollsLength);

    let isSecondTurn = 0;
    let fillBalls = 0;
    let lastValue = 0;

    let score =  newRolls.reduce((acc, curr) => {

    if (fillBalls) {
        acc += curr;
        fillBalls--;
    }

    if (!isSecondTurn) {
        if (curr === 10) {
            //strike
            fillBalls = 2;
            isSecondTurn = 0;
        }
        else {
            isSecondTurn = 1;
        }
    }
    else {
        if (curr + lastValue === 10) {
            //spare
            fillBalls = 1;
        }
        isSecondTurn = 0;
    }

    lastValue = curr;
    
    acc += curr;
    return acc;
    }, 0)

    if (rolls.length) score += rolls.reduce((acc, curr) => acc += curr);

    return score;

}
console.log("sd")
console.log(score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

const bestScore = (gameScores) => Math.max(gameScores);

console.log(bestScore(90, 1, 2))

module.exports = {score, bestScore}