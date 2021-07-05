// To Do 3


// Parens Valid
// Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.
function parensValid(str) {
    cnt1 = 0;
    cnt2 = 0;
    //split each charater into an array
    newArr = str.split("");
    //define a string to store all the '(' and ')'
    parentStr = ""
    console.log(newArr)
    for (var i = 0; i < newArr.length; i++){
        switch (newArr[i]) {
            //if '(', counter increase by one and store it into the parentStr
            case '(' : cnt1++; parentStr += newArr[i];break;
            //if ')', counter increase by one and store it into the parentStr
            case ')' : cnt2++;parentStr += newArr[i];break;
            default : continue;
        }
    }
    console.log("(", cnt1);
    console.log(")", cnt2);
    console.log(parentStr);
    //if the # of '(' equals ')' and the last character in parentStr is a ')', then return true else return false.
    if ((cnt1 == cnt2) && parentStr[parentStr.length-1]==")")
        return true
    else 
        return false
}
// str1 = "Y(3(p)p(3)r)s"
// str1 = "N(0)t )0(k"
str1 = "N(0(p)3"
console.log(parensValid(str1))




// Braces Valid
// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example:

// "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.
function Valid(str) {
    cnt1 = 0;
    cnt2 = 0;
    //split each charater into an array
    newArr = str.split("");
    //define a string to store all the '(' and ')'
    parentStr = ""
    console.log(newArr)
    for (var i = 0; i < newArr.length; i++){
        switch (newArr[i]) {
            //if '(', counter increase by one and store it into the parentStr
            case '(' : cnt1++; parentStr += newArr[i];break;
            //if ')', counter increase by one and store it into the parentStr
            case ')' : cnt2++;parentStr += newArr[i];break;
            default : continue;
        }
    }
    console.log("(", cnt1);
    console.log(")", cnt2);
    console.log(parentStr);
    //if the # of '(' equals ')' and the last character in parentStr is a ')', then return true else return false.
    if ((cnt1 == cnt2) && parentStr[parentStr.length-1]==")")
        return true
    else 
        return false
}



Is Palindrome
Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation, and capitalization) the letters are the same when reading from the back to the front.

Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.

Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.



Longest Palindrome
For this challenge, we will look not only at the entire string provided but also at the substrings within it. Return the longest palindromic substring. 

Given "what up, daddy-o?", return "dad". 

Given "uh... not much", return "u". 

Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!", return "e racecar e". Strings longer or shorter than complete words are OK.

Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. Given "Hot puree eruption!", return "tpureeerupt".