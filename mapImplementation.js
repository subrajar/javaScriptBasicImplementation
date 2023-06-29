function customMap(arr, callback) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    result[i]=callback(arr[i]);
  }

  return result;
}

var numbers = [1, 2, 3, 4, 5];

var doubledNumbers = customMap(numbers, function (num) {
  return num * 5;
});

console.log(doubledNumbers);
