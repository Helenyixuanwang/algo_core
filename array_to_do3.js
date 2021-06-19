// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.
function removeNeg(array) {
    for (var i = 0; i <array.length; i++) {
        if (array[i] < 0 ) {
            for (var j = i+1; j < array.length; j++) {
                array[j-1] = array[j];
            }
            array.length--;
            i--;// do this to avoid skipping consecutive negative numbers
        }
    }
    console.log(array)
    return array
}

//Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.
function secondToLast(arr) {
    if (arr.length<2) 
    return null
    else
    return (arr[arr.length-2])

}
// arr =  [42,true,4,"Kate",7]
// arr = [32,12]
arr=[1]
console.log(secondToLast(arr))


// Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.
function secondLargest(arr) {
    if (arr.length < 1) {
        return null
    }
    max = 0
    //first loop to locate where the max value is
    for (var i = 1; i < arr.length; i++) {
        if (arr[max] < arr[i]) {
            max = i
        }
    }
    //print this location
    console.log(max)
    //make max value in array[0], so that the second loop can be used to find the second largest value in arr[1:]
    let temp = arr[max];
    arr[max] = arr[0];
    arr[0] = temp;
    console.log(arr)
    let secondL = arr[1]
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] > secondL) {
            secondL = arr[i]
        }
    }
    return secondL
}
arr1 =  [42,1,4,Math.PI,7];
console.log(secondLargest(arr1))

// Nth-to-Last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.
function nthToLast(arr , n) {
    if (n > arr.length) {
        return null
    }
    else 
    return (arr[arr.length-n])
}
arr1 = [5,2,3,6,4,9,7]
console.log(nthToLast(arr1,6))

// Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.
function NthLargest(arr, n) {
    if (n > arr.length) return null
    //outer loop, if n=1 then ask for the largest value, if n=2, then loop twice to get the second largest value;if nth time, then get the nth largest value.
    for (var j = 0; j < n; j++) {
        max = j;
        //inner loop, to locate the largest value in each round
        for (var i = j+1; i < arr.length; i++) {
            if (arr[max] < arr[i]) {
                max = i;
            }
        }
        //from left to right, array will store values from largest to smallest
        let temp = arr[j];
        arr[j] = arr[max];
        arr[max] = temp;        
        
        
    }
    return arr[n-1]
}
arr1 = [4,2,5,1,-1,9]
console.log(NthLargest(arr1,1))

// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().
function skyline(arr) {
    newArr=[];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i]>0)&& (arr[i]<arr[i+1]))
         {
            newArr.push(arr[i]);
            newArr.push(arr[i+1]);
        }
    }
    return newArr
}
arr1 = [-1,1,1,7,3,8,-8,9,19,-1]
console.log(skyline(arr1))