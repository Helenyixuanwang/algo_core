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
    return [arr[max],secondL]
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
//copy from Jordan on June 19,2021
//copy Jordan's secondLast function here to test
function secondLargest(arr){

    // create two variables, one to keep track of the max in the list, the other to track the second largest value. Set second to a super low number so there's a better chance that we'll find that value. Don't want to set it to an index in the arr because there's a chance we could pick the max value inadvertently 
    let max = arr[0]
    let second = -1000

    // check if length is less than 2. There won't be a second largest value if so
    if (arr.length < 2) {
        return null

        // if length greater than 2, enter this condition
    } else {

        // iterate for i over the length of the list
        for (i=0; i<arr.length; i++){

            // first if checks if arr at i is greater than the value stored in max
            if(arr[i] > max){

                // if so, update second to what our max was before. If we don't do this, everytime we update max, second would stay the same and the function wouldn't work
                second = max
                max = arr[i]

                // if arr[i] isn't greater than or equal to max, we need to check if it's greater than the value stored in second
            } else if (arr[i] > second && arr[i] != max) {

                // if so, update second to the value at arr[i]
                second = arr[i]
            }
        }
        
        // I'm returning max to use in the skyscraper function, but the answer to this problem is to just return second
        return [max,second]
    }
}

function skylineHeights(arr){
    // create a few variables, a counter variable to update the values in our newly created empty list. The counter variable is our workaround for not being able to use .push()
    // our next variable is current largest. When we iterate through the list, this will check if the values following the current largest in the list are greater. If so, that means you can see the building, so we will have to add it to the newArr
    // the last variable is going to be the max of the list. We'll use the secondLargest function from before. I returned [max, second] in that function, so I access the max by grabbing the 0th index of that function called with arr


    let count = 0
    let newArr = []
    let currentLargest = arr[0]
    let max = secondLargest(arr)[0]

    // iterate over arr
    for(i=0; i<arr.length; i++){
        
        // if arr[i] is equal to or less than 0, we wouldn't be able to see the building at all, so we use continue to go to the next value in the arr
        if (arr[i] <= 0) {
            continue

            // if not, move to the else
        } else {

            // first if, check to see if the arr[i] == max. If so, we'll add arr[i] to the list by setting the value of newArr at our count variable equal to arr[i]. Then we return newArr because no buildings following our max will be tall enough to be visible
            if (arr[i] == max){
                newArr[count] = arr[i]
                return newArr

            // else if the value at arr[i] is greater than our current largest in the list, we will add that value to the list using the newArr[count] from above. We then set currentLargest to the value at arr[i] and increment our count variable
            } else if (arr[i] > currentLargest) {
                newArr[count] = arr[i]
                currentLargest = arr[i]
                count++
            }
        }
    }

    // after we get through iterating, I don't think we'd reach this return because we'd eventually hit the max, but just in case, return newArr with the solution
    return newArr
}

console.log(skylineHeights([-1,1,1,7,3]))
console.log(skylineHeights([-1,1,1,7,3,9,12,2,25]))
console.log(skylineHeights([-1,1,1,7,3,6,7,5,4,3,3,4,9]))