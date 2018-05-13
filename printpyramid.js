function printPyramid(n)
{
    for (let i = n - 1, j = 1; i >= 0; i--, j += 2){
        console.log(" ".repeat(i) + "#".repeat(j));
    }
}

//printPyramid(5)