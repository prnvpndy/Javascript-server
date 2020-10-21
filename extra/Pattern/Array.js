//creating an Array
let fruits = ['Apple', 'Banana']

console.log(fruits.length)

//Accessing an Array item using the index position

let first = fruits[0]
//Apple

let last = fruits[fruits.length - 1]

//Loop over an Array
fruits.forEach(function(item, index, array) {
      console.log(item, index)
    })
//Add an item to the end of an Array
let newLength = fruits.push('Orange')

//Remove an item from the end of an Array
let last1 = fruits.pop()

//Array.from()
console.log(Array.from('Prnv'));

//Array.isArray()
console.log(Array.isArray(['a','b']));
console.log(Array.isArray(['git']));
console.log(Array.isArray([1,2,3]));

//Array.of()
console.log(Array.of(7));
console.log(Array(7));

//Array.prototype.concat()
const array1 = ['P', 'r', 'a'];
const array2 = ['n', 'a', 'v'];
const array3 = array1.concat(array2);
console.log(array3);

//Array.prototype.copyWithin()
const array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4.copyWithin(0, 2, 4));

//Array.prototype.reverse()
const array5 = ['Hello', 'World'];
console.log('array5:', array5);
const reversed = array5.reverse();
//console.log('reversed:', reversed);
console.log('array5:', array5);

//Array.join()
const elements = ['Noida', 'UP', 'INDIA'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

//Array.keys()

const iterator = elements.keys();
for (const key of iterator) {
  console.log(key);
}

//Array.pop()

console.log(elements.pop());

//Array.push()

console.log(elements.push('DELHI'));
console.log(elements);