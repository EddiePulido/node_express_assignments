function maxMinAv(arr){
  var max = arr[0];
  var min = arr[0];
  var avg = 0;
  var sum = arr[0];
  
  for(var i=1;i<arr.length;i++){
    if(max < arr[i]){
      max = arr[i];
    }
    if(min > arr[i]){
      min = arr[i];
    }
    
    sum += arr[i];
      
  }
  
  
  
  avg = sum/arr.length;
  return  "The minimum is "+ min + ", the maximum is " + max +  ", and the average is " + avg + "."

}
console.log(maxMinAv([1, -2, 9, 4]));