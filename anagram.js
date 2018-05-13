function anagram(myStr, myStr2)
{
    var flag = true;
    var myStrArr = myStr.split('');
    var myStr2Arr = myStr2.split('');
    myStrArr.sort();
    myStr2Arr.sort();
    for (var i = 0; i < myStr2Arr.length; i++) {
        if (myStrArr[i] != myStr2Arr[i]) {
            flag = false;
        }
    }
        if (flag) {
            console.log("The strings : " + myStr + " and " + myStr2 + ", are Anagrams");
    }       else {
                 console.log("The strings : " + myStr + " and " + myStr2 + ", aren't Anagrams");
    }
}

var myStr = "Bugatti";
var myStr2 = "Bentley";
anagram(myStr, myStr2);