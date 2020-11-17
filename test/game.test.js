const BoardGame = require('../src/game');

test('adds 1 + 2 to equal 3', () => {
  expect(new BoardGame().giveBool(true)).toBe(true);
});

test('initialize', () => {
  const game = new BoardGame();
  expect(game).toBeDefined();
});