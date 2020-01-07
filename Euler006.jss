//finds difference between sum of squares and square of sum from 1 to n.
function sumSquareDifference(n) {
  let sumSq = 0; //sum of the squares
  let sqSum = 0; //square of the sum
  let diff = 0;

  for (let i=1; i<=n; i++){
    sumSq += Math.pow(i,2);
    sqSum += i;
  }
  sqSum = Math.pow(sqSum,2);
  diff = Math.abs(sqSum - sumSq);

  return diff;
}

console.log(sumSquareDifference(10));
