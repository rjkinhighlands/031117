write a function named arrSum that takes in an array and returns the sum of the array

[9,10,11]

0+1+2 = 3

function arrSum(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum += arr[i]; //sum = sum + arr[i]
    }

    return sum;
}