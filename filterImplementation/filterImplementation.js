function customFilter(arr, callback) {
  var result = [];
  var j=0;
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result[j] = arr[i];
      j++;
    }
  }

  return result;
}


var numbers = [1, 2, 3, 4, 5];

var evenNumbers = customFilter(numbers, function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
