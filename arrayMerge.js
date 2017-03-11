write a function named arrayMerge that takes in an argument named arr, and returns a string of all the elements combined


function arrayMerge(arr){
    return arr.join("");
}

function arrayMerge(arr){
    var str = "";

    for (var i=0; i < arr.length; i++){
        str = str + arr[i];
    }

    return str;
}