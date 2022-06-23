module.exports = function reverse (num) {
  const numStr = String(Math.abs(num));
  let reversedNum = '';

  for (let i=0; i < numStr.length; i++) {
    reversedNum = `${numStr[i]}${reversedNum}`;
  }

  return Number(reversedNum);
}
