// Min to Front(optional)
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
function minToFront(arr) {
    var min = 0
    for (var i = 1; i < arr.length ; i++) { // first loop to locate the min value
        if (arr[min] > arr[i]) {
            min = i //mark the location where min value stays
        }
        
    }
    console.log("The pointer points to index["+min+"]")
    var value = arr[min]
    for (var j = min - 1; j >= 0; j--) { //second loop to move all values before min to right 
        arr[j+1] = arr[j]

    }
    arr[0] = value;
    return arr

}

arr1 = [4,2,1,3,5,-10]
console.log(minToFront(arr1))