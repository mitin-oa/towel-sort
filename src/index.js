
// You should implement your task here.
module.exports = function towelSort (matrix) {
  return matrix.reduce((k, v, i) => {
    v.sort((a, b) => !(i & 1) ? a - b : b - a).map(x => k.push(x)); 
    return k;
  }, [])
};

