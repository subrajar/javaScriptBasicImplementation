function customForEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

var numbers = [1, 2, 3, 4, 5];

customForEach(numbers, function (num) {
  console.log(num);
});
