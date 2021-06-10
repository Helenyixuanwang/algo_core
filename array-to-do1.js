// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods

function pushFront(array, value) {
    for (var i = array.length-1; i >= 0; i--)
    {
        array[i+1] = array[i]
    }
    array[0]  = value
    console.log(array)
    return array
}

arr = [3,5,-1,7,90]
pushFront(arr, 77)

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(array) {
    value = array[0]
    for (var i=1;i<array.length;i++){
        arr[i-1]=arr[i]
    }
    array.pop()
    console.log(array)
    return value
}

// arr = [-1,2,4,9,11,-9]
arr = ['coding',"apple","pear","car"]
popFront(arr)


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(array, loc, value) {
    if (loc > arr.length-1)
       {console.log("Index value is incorrect")
        return null
    }
    else 
    {

        for (var i = array.length-1; i >= loc;i-- ) {
        array[i+1] = arr[i]
        }
        arr[loc] = value
        console.log(array)
        return array
    }
}

// arr = [1,2,3,4,6]
arr = ['I', 'like','coding','and you']
insertAt(arr,4, 'dojo')

// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(array,loc) {
    if (loc > array.length -1) {
        console.log("Index value is incorrect")
        return null
    }
    var value = array[loc]
    for (var i = loc+1; i< array.length;i++) {
        arr[i-1] = arr[i]
    }
    array.pop()
    console.log(array)
    return value
}

arr = [1,3,5,7,9,11,12,15]
console.log(removeAt(arr,7))

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(array) {
    for (var i = 0; i <= array.length/2; i+=2) {
    var temp = arr[i]
    arr[i] = arr[i+1]
    arr[i+1] = temp
    }
    console.log(array)
    return array
}

arr = [1,2,3,4,5]
swapPairs(arr)

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// Second: Solve this without using any nested loops.
function removeDup(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
	return newArr;
}
arr1 = [1,1,2,3,5,5]
console.log(removeDup(arr1))

//removeNeg is studied in class by instructor Adrian
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

arr = [1,-2,-3,5,8,-9,-10,11,-5,6]
removeNeg(arr)