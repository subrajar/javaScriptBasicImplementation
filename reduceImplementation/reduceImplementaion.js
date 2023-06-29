function customReduce(arr, callback,value) {
  var accumulator = value;

  for (var i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }

  return accumulator;
}

var numbers = [1, 2, 3, 4, 5];

var sum = customReduce(numbers, function (accumulator, num) {
  return accumulator + num;
}, 0);

console.log(sum); 
