function countVowels(statement)
{
    return statement.match(/[aeiou]/gi).length; //regex i = case insensitive matching
}

console.log(countVowels("Oneplus 6 is releasing soon."));
