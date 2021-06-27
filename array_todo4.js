// To Do 4


// Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?




// Remove Range
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
function removeRange(arr,start,end) {
    //how many digit will be removed
    m = end-start+1;
    //how many digit after end will be moved forward
    n = arr.length-end-1;

    if ( end > arr.length-1) {
        console.log("end is beyond length of array, wrong")
        return arr
    }
   
    for (var i = end+1; i < arr.length; i++) {
            arr[i-m] = arr[i];
        }
        //shorten the length of array
        arr.length -= m;
        return arr
    }
    
   
   

arr1 = [20,30,40,50,60,70]
console.log(removeRange(arr1,2,6))



// Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]




// Double Trouble
// Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
function doubleTrouble(arr) {
    arr.length *= 2;
    //index number of given array will change from 0,1,2,3 to 0,2,4,6,...2n, and index number 2n+1 has the same value as 2n. Move value from right to left so that original values will not be rewritten before relocation.
    for (var i = (arr.length-2)/2; i >= 0; i--) {
        arr[2*i] = arr[i];
        arr[2*i+1] = arr[i];
    }
    return arr
}

// arr1 = [4,"Ulysses",42,false]
arr1= [0,8,-4,true, 19, "hello"]
console.log(doubleTrouble(arr1))



// Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

// Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!

function zipIt(arr1, arr2) {
    newArr = [];
    newArr.length = arr1.length+arr2.length;
    //if the first array is shorter than the second array, the part that is longer than arr1 will be moved at the back
    if (arr1.length <= arr2.length) {
        for (var i  = 0; i < arr1.length; i++) {
            newArr[2*i]=arr1[i];
            newArr[2*i+1]=arr2[i];
        }
        //move the extra part to the back of new array
        for (var j = arr1.length; j < arr2.length; j++){
            newArr[j+arr1.length] =  arr2[j]
        }
    }
    //if the first array is longer than the second one, the part in arr1 that is longer than array2 will be moved to the back of new array.
    else {
        for (var k = 0; k < arr2.length; k++) {
            newArr[2*k+1] = arr2[k];
            newArr[2*k] = arr1[k];
        }
        //move the extra part in arr1 to the back of new array. 
        for (var m = arr2.length; m < arr1.length; m++) {
            newArr[m+arr2.length] = arr1[m]
        }
    }
    return newArr
    }

  let  arr3 = [1,2]
   let  arr4 = [10,20,30,40]

// let arr3 = [10,20,30,40]
// let arr4 = [1,2]

//  arr3 = [1,3,5,7,9,11]
// arr4= [2,4,6]
console.log(zipIt(arr3, arr4))

