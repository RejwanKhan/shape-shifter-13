const trianglePerimeter = require("../easy/trianglePerimeter");

/**
 * Uses Heron's formula (https://en.wikipedia.org/wiki/Heron%27s_formula) to give the area of a triangle
 * with sides a,b,c. The triangle isn't assumed to be a right-triangle.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number} the area
 */

function triangleAreaFromSides(a, b, c) {
  // const s = trianglePerimeter(a, b, c) / 2
  // I'm going to lunch, I'll do the rest later... probably
  const semipeter = (a + b + c) / 2;
  let findArea = semipeter * (16 - a + (16 - b) + (16 - c));
  const squareRoot = Math.sqrt(findArea);
  return squareRoot;
}

module.exports = triangleAreaFromSides;

console.log(triangleAreaFromSides(4, 13, 15));
