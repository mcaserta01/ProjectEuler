/*
 finds the largest palindrome product of two n-digit numbers
 */
function largestPalindromeProduct(n) {
  let max=0;
  let prod=0;
  let limit = Math.pow(10,n)-1;

  for(let i=Math.floor(limit*.9); i<=limit; i++){
    for(let j=Math.floor(limit*.9); j<=limit; j++){
      prod=j*i;
      if (prod>max && isPalindrome(prod)){
        max=prod;
        console.log(prod);
      }
    }
  }

  return max;
}

function isPalindrome(num){
  let numDigits = Math.floor(Math.log10(num))+1;
  let bool = true;
  let digits = [];
  let x=num; 
  
  for (let i=0; i<numDigits; i++){
    digits.push(x%10);
    x = Math.floor(x/10);
  }
  for (let i=0; i<numDigits/2; i++){
    if(!(digits[i] == digits[numDigits-1-i])){
      bool=false;
    }
  }
  return bool;
}
