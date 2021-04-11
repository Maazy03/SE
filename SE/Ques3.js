function uniqifyElement(str)
{
    function uniqueWord(stringArray) {
        stringArray.sort();
        return stringArray.filter(function (currVal, currValIndex, arr) {
            console.log("currentVal",currVal)
            console.log("Index",currValIndex)
            console.log("ArrayObject",arr)
            console.log("L1",arr[currValIndex+1])
            console.log("L2",arr[currValIndex+1]!=currVal)
            
            return arr[currValIndex + 1] != currVal;
        });
    }
    
    
    // var str = "hello my name hello is maaz hello";
    // var str = prompt("Enter unique name");
    
    var split = str.split(" ");
    console.log(split);
    
    var result =uniqueWord(split);
    console.log(result)
    
}

module.exports=uniqifyElement