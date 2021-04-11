
function cameltoSnake(str){
    console.log("str",str)

    // var camelCaseString = prompt("Enter string in camelCase");
    var camelCaseString = str;

    var snakeCaseString = camelCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
    // console.log("o1",snakeCaseString) 
    return  snakeCaseString
}
// cameltoSnake('heyCas')

module.exports = cameltoSnake