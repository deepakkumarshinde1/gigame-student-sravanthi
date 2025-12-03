// destructuring
let array = [10, 20, 30, 40, 50];
// let n1 = array[0];
// let n2 = array[1];
// let nArray = array.slice(2);

let [n1, n2, ...nArray] = array;
let student = {
  sName: "Deepakkumar",
  course: "React",
  duration: "4.5 Months",
};

let { sName: studentName, course } = student;
console.log(studentName);

// spread operator
let array1 = [10, 20, 30, 40, 50];
let array_2 = [10, 20, 30, 40, 50];
let array2 = [10, 20, 3, 4, ...array1, 10, 20, 30, ...array_2, 40, 50];
array2[0] = 100;
console.log(array1);
console.log(array2);

let product = {
  name: "Dell",
  price: 42000,
};

let stock = {
  qty: 10,
  city: "Nasik",
};

let productDetails = {
  ...product,
  ...stock,
};

console.log(productDetails);

// object literals
let qty = 20;
let city = "Nashik";
let propName = "state";
let loc = {
  count: qty,
  city,
};

loc[propName] = "Maharashtra";
console.log(loc);
console.clear();
/// default values and rest params
function add(a, b, ...list) {
  console.log(list);
}
add("s", 2, true, function () {}, {}, []);
console.clear();
// Generators
function* genId(count) {
  let index = 0;
  while (index < count) {
    if (index === count - 1) {
      return index;
    } else {
      yield index;
    }
    index++;
  }
}
let gen = genId(3);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Iterators & Iterables
// Collections;
// •	Map
// •	Set
// •	WeakMap
// •	WeakSet
// Symbols
// 	•	Creating unique identifiers
// 	•	Symbol properties
// 	•	Use in private-like object keys
