function customFilter(arr, callback) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      resultpush(arr[i]);
    }
  }

  return result;
}


var numbers = [1, 2, 3, 4, 5];

var evenNumbers = customFilter(numbers, function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
