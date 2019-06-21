/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

let map = new Map();
map.set(1, 'HTML');
map.set(2, 'CSS');
map.set(3, 'JavaScript');
map.set(4, 'JQuery');
map.set(5, 'Bootstrap');
map.set(6, 'Node JS');

console.log(map);

// get value
console.log(map.get(6));

// has key
console.log(`Has Key  5 : ${map.has(5)}`);

// delete key
map.delete(5);
console.log(map);

// Size of Map
console.log(`Size : ${map.size}`);

// get keys
let output = '';
for(let key of map.keys()){
    output += `${key} `;
}
console.log(output);

// get values
output = '';
for(let value of map.values()){
    output += `${value.toUpperCase()} `;
}
console.log(output);

// get all the entries
output = '';
for(let entry of map.entries()){
    output += `Key : ${entry[0]} => value : ${entry[1]} \n`;
}
console.log(output);

// clear the map
map.clear();
console.log(map);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

let colorSet = new Set();
colorSet.add('white');
colorSet.add('white');
colorSet.add('black');
colorSet.add('orange');
colorSet.add('red');

// size
console.log(colorSet.size);


// Delete
colorSet.delete('white');
console.log(colorSet);

// has
console.log(`black is there ? ${colorSet.has('black')}`);

// clear
colorSet.clear();
console.log(colorSet);