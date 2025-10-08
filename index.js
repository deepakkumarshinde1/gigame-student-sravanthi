// variables
// scoping
// closure

// common function
// function fun() {}

// function with expression
// let fun1 = function () {};

// function  expression with arrow
// let fun2 = () => {};

// function as callback
// fun(function () {});

// function callback with arrow
// fun(() => {});

// IIFE
// (function () {})()(
//   // IIFE with arrow
//   () => {}
// )();

function parent1() {
  let name = "Deepakkumar";
  let count = 0;
  function child() {
    count++;
    console.log(count);
  }

  return {
    inc() {
      count++;
      console.log(count);
    },
    dec() {
      count--;
      console.log(count);
    },
    reset() {
      count = 0;
      console.log(count);
    },
  };
}

let childFunction = parent1();

childFunction.inc();
childFunction.reset();
childFunction.dec();
childFunction.dec();

// DOM
//document.getElementById(); // element || null
//document.getElementsByClassName(); // htmlArray || []
//document.getElementsByTagName(); // htmlArray || []
//document.querySelector("#parent > .child"); // single element || null
//document.querySelectorAll(); // multiple element nodeList || []

let h1Element = document.querySelector("#title");
let parent = document.querySelector("#parent");
let child = document.querySelector(".child");
let btn = document.querySelector("#btn");

parent.addEventListener("click", () => {
  console.log("parent");
});

child.addEventListener("click", () => {
  console.log("child");
});

btn.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  console.log("btn");
  h1Element.innerHTML = "<i>Deeepakkumar</i>";
});

// prototyping
String.prototype.getMoreDetails = function () {
  let _string = this.toString();
  return {
    up: _string.toUpperCase(),
    lc: _string.toLowerCase(),
    l: _string.length,
  };
};

let text = "Deepak";
let _text = text.getMoreDetails();

// constructor function
function Human() {
  this.name = "Deepak";
}
Human.prototype.printName = function () {
  console.log(this.name);
};
// prototype inheritance

function Student() {
  this.name = "Kumar";
}
// copy all prototype of parent to child
Student.prototype = Object.create(Human.prototype);

let human = new Human();
human.printName();

let student = new Student();
student.printName();

// Promise and Async Await
// pending => fulfilled or rejected
async function fun(a, b) {
  if (b === 0) {
    return Promise.reject("Number is zero for division");
  } else {
    return Promise.resolve(a / b);
  }
} // 10s

console.log("Hello");
fun(5, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); // 10s
console.log("hi");

async function fun1(a, b) {
  if (b === 0) {
    return Promise.reject("Number is zero for division");
  } else {
    return Promise.resolve(a / b);
  }
}
async function fun2(a, b) {
  return Promise.resolve(a * b);
}
async function fun3(a, b) {
  return Promise.resolve(a + b);
}
async function fun4(a, b) {
  return Promise.resolve(a - b);
}

async function calc(a, b) {
  try {
    let r1 = await fun1(a, b);
    let r2 = await fun2(a, r1);
    let r3 = await fun3(a, r2);
    let r4 = await fun4(a, r3);
    console.log(r4);
  } catch (error) {
    console.log(error);
  }
}
console.log("hello");
calc(10, 2);
console.log("hi");
