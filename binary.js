function binarySearch(arr, searchElement){
// Binary Search
var start = 0;
var end = arr.length-1;
var mid;
var midElement;
    while (start<=end){
        mid = Math.floor((start+end)/2);
        midElement = arr[mid];
        if (midElement < searchElement){
            start = mid +1;
        }else if(midElement > searchElement){
            end = mid-1;
        }else{
            return mid;
        }
        
    }
    return -1;  
}




console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93));        
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15));
