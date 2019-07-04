function bracesValid(str){
  arr = [];
  
  open = ["(", "{", "["];
  close = [")", "}", "]"];
  
  dict = {"{":"}", "[":"]", "(":")"}
  
  for(var i=0;i<str.length;i++){
    if(open.includes(str[i])){
      arr.push(str[i]);
    }else if(close.includes(str[i])){
      if(dict[arr[arr.length-1]] == str[i]){
        arr.pop();
      }else{
        return false;
      }
    }
  }
  
  if(arr.length > 0){
    return false;
  }
  
  return true;
  
}

console.log(bracesValid("{{()}}[]"))