function firstNonrepeatingChar(string) 
{
    for(let i = 0, length = string.length; i < length; i++)
{
        let repeating = false;
        for(let j = i+1; j < string.length; j++)
	{
            if(string[i] === string[j])
		{
                	repeating = true;
            }
        }

        if(!repeating){
            return string[i];
        }
    }

}

let string = "Karthik";

console.log(firstNonrepeatingChar(string));
