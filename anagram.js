function anagram(myStr, myStr2)
{
    var flag = true;
    var Arr1 = myStr.split('');
    var Arr2 = myStr2.split('');
    Arr1.sort();
    Arr2.sort();
    for (var i = 0; i < Arr2.length; i++) {
        if (Arr1[i] != Arr2[i]) {
            flag = false;
        }
    }
        if (flag) {
            console.log("The strings : " + myStr + " and " + myStr2 + ", are Anagrams.");
    }       else {
                 console.log("The strings : " + myStr + " and " + myStr2 + ", aren't Anagrams.");
    }
}

var Arr1 = "Bugatti";
var Arr2 = "Bentley";
anagram(Arr1, Arr2);
