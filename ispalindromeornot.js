function isPalindrome(string) 
{

    let reverse = "";

    for(i = string.length - 1; i >= 0; i-- )
{
        reverse += string[i];
    }

    return reverse === string;

}

let string = "Karthik";

console.log(isPalindrome(string));
