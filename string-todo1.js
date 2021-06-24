
function removeBlanks(str) {
    wordArray = str.split(" ");
    newArr = wordArray.join("");
    return newArr
}

arr1 = " Pl ayTha tF u nkyM usi c "

console.log(typeof arr1)

console.log(removeBlanks(arr1))

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigit(arr) {
    
    
    Digit = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]%1 == 0) {
            Digit += arr[i]

        }
    }
    return Digit/1
}
//the zero before a string is treated as number, so 0+0=0, but the zero after a string is treated as a string, like '8'+0+0='800'
arr1 = "000s1a3y5w7h9a2t4?6!8?0000"
console.log(getDigit(arr1))

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acro(arr) {
    newarr = arr.split(" ");
    console.log(newarr)
    str = '';
    for (var i = 0; i < newarr.length; i++) {
        if (newarr[i]=='') 
        continue;
         str += newarr[i][0].toUpperCase();
        }
  return str

}
// arr1 = " there's no free lunch - gotta pay yer way. "
arr1 = "Live from New York, it's Saturday Night!"
console.log(acro(arr1))

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function nonSpaces(str) {
    let newStr = str.split("");
    let count = 0;
    for ( var i = 0; i < newStr.length; i++) {
        if (newStr[i] == false) 
        continue;
        count++;
    }
    return count
}

str1 = "Honey pie, you are driving me crazy"
console.log(nonSpaces(str1))

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.
function removeShort(strArr,val) {
    for ( var i = 0; i < strArr.length; i++) {
        if (strArr[i].length < val) {
            for (var j = i+1; j < strArr.length; j++) {
                strArr[j-1] = strArr[j];
            }
            strArr.length--;
        }
    }
    return strArr
}




str1 = ['live','from','new','york','it','saturday','ok']
console.log(removeShort(str1, 3))