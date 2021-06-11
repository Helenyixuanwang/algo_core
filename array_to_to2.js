// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
function reverse(arr) {
    for (var i = 0; i < arr.length/2 ; i++ ) {
         var temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i]
        arr[i] = temp
    }
    return arr

}

arr1 = [1,35,7,4,9]
console.log(reverse(arr1))

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each elemen

function rotate(arr, offset) {
    var shiftBy = Math.abs(offset);

    while(shiftBy > 0) {

       if ( offset > 0) { //move right, save the value with largest index
            temp = arr[arr.length-1]
            for (var i = arr.length-1; i > 0; i--) {
                arr[i] = arr[i-1];
            }
            arr[0] = temp;
        }
        else {
                temp = arr[0];
                for (var j = 0; j < arr.length-1; j++) {
                    arr[j] = arr[j+1];
                }
                arr[arr.length-1]=temp;
            }
        shiftBy--;
        }
        return arr
    if (shiftBy = 0) {return arr}
        
}
arr1 = [1,2,3]
console.log(rotate(arr1,9))



// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.


function filter(arr,min,max) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            for (var j = i+1; j < arr.length; j++) {
                arr[j-1] = arr[j];
               
            }
            arr.length--;
            i--;
            
        }
    }
 
    console.log(arr)
    return arr
}
arr1 = [11,3,4,6,7,8,9,5]
console.log(filter(arr1,6,11))




// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concat(arr1, arr2) {
    var array = [];
    array.length=arr1.length + arr2.length;
    for (var i = 0; i < arr1.length; i++ ){
        array[i] = arr1[i];
    }
    for (var j=0; j < arr2.length; j++) {
        array[arr1.length+j] = arr2[j];
    }
    console.log("["+array+"]")
    console.log("new array's length is "+ array.length)
    return array;
}
concat([3,1,0,8,'Dojo'], ['Dojo',0,9,19])





