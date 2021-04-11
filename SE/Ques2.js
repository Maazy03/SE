function cameltoSnake(str) {
  // var snakeCaseString =prompt('Enter string in snake_case');
  var snakeCaseString = str;
  var find = /(\_\w)/g;
  var convert = function (matches) {
    return matches[1].toUpperCase();
  };
  var camelCaseString = snakeCaseString.replace(find, convert);

//   console.log(camelCaseString);
  return camelCaseString
}

module.exports = cameltoSnake;
