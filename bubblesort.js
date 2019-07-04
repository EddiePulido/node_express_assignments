function bubblesort(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  return arr;
}

console.log(bubblesort([4,3,76,72,1,5,4]))

