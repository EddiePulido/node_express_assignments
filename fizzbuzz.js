function fizzbuzz(n){
  if(isNaN(n)){
    return "Parameter must be a positive number";
  }
  var str = "";
  
  for(var i=1;i<=n;i++){
    if(i%3 === 0){
        if(i%5===0){
          str += "FizzBuzz";
        }else{
          str += "Fizz";
        }    
    }else if(i%5===0){
      str+= "Buzz";
    }else{
      str += i;
    }
    if(i == n){
      str += ".";
    }else{
      str += ", ";
    }
  }
  
  return str;
  
}

console.log(fizzbuzz(15));