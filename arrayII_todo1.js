// To Do 1


// Average (Warmup)
// (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers.
function ave(arr) {

    sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

arr1 = [1, 2, 3, 4, 5, 6]
console.log(ave(arr1))



// Balance Point
// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.
function balancePoint(arr) {
    if (arr.length < 2) {
        console.log("Array is too short")
    }
    else {
        //outer loop, i is current pointer
        for (var i = 0; i < arr.length; i++) {

            sum1 = 0;
            //sum up all the values which are after current pointer
            for (var j = i + 1; j < arr.length; j++) {
                sum1 += arr[j];
            }
            sum2 = 0;
            //sum up all values which are in front of current pointer inclusive
            for (var k = 0; k < i + 1; k++) {
                sum2 += arr[k];
            }
            if (sum1 != sum2) {
                console.log('sum1=' + sum1, 'sum2=' + sum2, i);
                continue
            }
            else {
                console.log('balance indice is ' + i);
                return true

            }
        }

    }
    //until the end of loop, does not find any match, so return false
    return false
}
// arr1 = [1,2,3,4,10]
// arr1 = [1,2,4,2,1]
arr1 = [9, 9]
console.log(balancePoint(arr1))



// Balance Index
// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.
function balanceIdx(arr) {
    if (arr.length < 3) {
        console.log("Array is too short")
        return -1
    }
    else {
        for (var i = 1; i < arr.length; i++) {
            sum1 = 0;
            for (var j = i + 1; j < arr.length; j++) {
                sum1 += arr[j]
            }
            sum2 = 0;
            for (var k = 0; k < i; k++) {
                sum2 += arr[k]
            }
            if (sum1 != sum2) {
                // console.log('sum1 '+sum1, 'sum2 '+sum2)
                continue }
            else {
                console.log("got balance index: "+"sum1 "+sum1, "sum2 "+sum2)
                return i
            }
        }
    }
    return -1
}
// arr1 = [-2,5,7,0,3]
arr1 = [9,9]
console.log(balanceIdx(arr1))
