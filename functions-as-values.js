var strLength = function (str)
{
  var ary = [];
  var length = str.length
  ary.push(str);
  ary.push(length);
  console.log(ary);
}
strLength("hello")

var listItems = [
  [ 1, 'Zarya' ],
  [ 2, 'Mei' ],
  [ 3, 'Mercy' ],
];

function listIt (items) {
  return items[0] + ': ' + items[1];
}

function allTheThings (items, listItFn) {
  var result = [];
  for (var i = 0; i < items.length; i++) {
    // `pair` is an array of two items (e.g. [ 2, 'Mei' ])
    var pair = items[i];

    // `formattedAsList` is the two items, formatted (e.g. '2: Mei')
    var formattedAsList = listItFn(pair);

    // Now we take that result and push it into a final array
    result.push(formattedAsList);
  }

  return result;
}

console.log(allTheThings(listItems, listIt));

function add (num)
{
  return num + 1;
}

function map (array, callbackFn) {
  var result = [];

  for (var i = 0; i < array.length; i++) {

    var item = callbackFn(array[i]);

    result.push(item);
  }
  return result;
}

var myArray = [10, 20, 30];

console.log(map(myArray, add));
