/*
This is required to remove requestAnimationFrame warnings when running tests
with React 16.0.0.

See: https://github.com/facebook/jest/issues/4545#issuecomment-332762365
*/

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
