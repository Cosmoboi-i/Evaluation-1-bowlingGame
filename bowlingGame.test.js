const {score, bestScore} = require('./bowlingGame.js')

describe('bowling game score', () => {
    describe('gives total score of a game', () => {
        it('should output 90', () => {
            expect([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]).toBe(90);
        });
        it('should output 30', () => {
            expect([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]).toBe(30);
        });
        it('should output 16', () => {
            expect([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).toBe(16);
        });
    });
});