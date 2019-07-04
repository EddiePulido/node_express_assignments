function coinChange(coins){
  dict = {};
  
  if(coins >= 100){
    dict["dollars"] = Math.trunc(coins/100);
    coins = coins % 100;
  }
  
  if(coins >= 25){
    dict["quarters"] = Math.trunc(coins/25);
    coins = coins % 25;
  }
  
  if(coins >= 10){
    dict["dimes"] = Math.trunc(coins/ 10);
    coins = coins % 10;
  }
  
  if(coins >= 5){
    dict["nickels"] = Math.trunc(coins % 5);
    coins = coins % 5;
  }
  
  if(coins > 0){
    dict["pennies"] = coins;
  }
  
  return dict;
}

console.log(coinChange(78));