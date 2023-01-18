const {score, bestScore} = require('./bowlingGame.js')

describe('bowling game score', () => {

    describe('gives total score of a game', () => {
        it('should output 90', () => {
            expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
        });
        it('should output 30', () => {
            expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toBe(30);
        });
        it('should output 16', () => {
            expect(score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(16);
        });
    });

    describe('gives best score out of a set of games', () => {
        it('should output max element from the array', () => {
            expect(bestScore[90, 30, 16]).toBe(90);
        });
    });
});