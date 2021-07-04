// To Do 2
console.log(1 + 2 + "3" + "4" + 5 + 6);

// Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed.

// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!
function rever(str) {
    //change string into an array so that each string character can be manipulated
    arr = str.split('');
    //use the reverse method learned from array to do this reverse
    for (var i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    
    return arr.join('')
}
str2 = 'creature'
console.log(rever(str2))



// Remove Even-Length Strings
// Build a standalone function to remove strings of even lengths from a given array. For array containing

// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that same array to ["Nope!","Its","Chris","."].
function removeEven(arr) {
    for ( var i = 0; i < arr.length; i++){
        //if length of string is odd, then loop move on
        if ((arr[i].length)%2 == 1)
        continue;
        //if length of string is even, move all that is after current string left
        for ( var j = i+1; j < arr.length; j++) {
            arr[j-1] = arr[j]
        }
        //avoid skipping the next string
        i--;
        //length of array is decreased by 1 
        arr.length--;
    }
    return arr
}
arr1 = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]
console.log(removeEven(arr1))

 

// Integer to Roman Numerals
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.



Roman Numerals to Integer
Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”. Comprising 30 bronze gears, its wooden frame features 2000 characters. Given a string containing a Roman numeral representation of a positive integer, return the integer. Remember that III is 3, DCIX is 609 and MXDII is 1492.

