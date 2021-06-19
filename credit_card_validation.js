// Credit Card Validation
// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// Set aside the last digit; do not include it in these calculations (until step 5);
// Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// If any results are larger than 9, subtract 9 from them;
// Add all numbers (not just our odds) together;
// Now add the last digit back in – the sum should be a multiple of 10.
// For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], then after step 2) it is [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple-of-10, we would instead return false.

// console.log(Number.isInteger(20/10))

function cardVali(arr) {
    for (var i  = arr.length-2; i >= 0; i=i-2) {
        arr[i] *=2;
        
        if (arr[i] > 9) {
            arr[i] -= 9;
        }
        console.log(arr)
        
    }
    var sum = 0
    for (var i = 0; i < arr.length-1; i++) {
         sum += arr[i];
    }
    return (Number.isInteger((sum + arr[arr.length-1])/10))
    
}

// arr1 = [5,2,2,8,2]
arr1 = [5,5,7,0,8,0,0,0,0,0,5,0,1,7,2,8]

console.log(cardVali(arr1))