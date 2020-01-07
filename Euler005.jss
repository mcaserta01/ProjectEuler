//finds the smallest number evenly divisible by all numbers 1 through n.
function smallestMult(n) {
  let x=1;
  let remainder=0;

  for (let i=2; i<=n; i++){
    remainder = x%i;
    //console.log(x, remainder, i);
    if(remainder != 0){
      if(i%remainder==0){
        x *= i/remainder;
      }else{
        x *= i;
      }  
    }   
  }

  return x;
}
console.log(smallestMult(30));
