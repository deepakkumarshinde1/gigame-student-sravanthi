let btn = document.querySelector("#get-data");

function loadingBtn(button, type, text = "Loading...") {
  button.innerHTML = text;
  btn.disabled = type;
}

btn.addEventListener("click", () => {
  loadingBtn(btn, true, "Getting...");
  getData("https://api.escuelajs.co/api/v1/products");
});

function apiTimeout(controller, timeout = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      controller.abort();
      reject(`Timeout, unable to call server in ${timeout}ms`);
    }, timeout);
  });
}
async function getData(url) {
  try {
    const controller = new AbortController();
    const signal = controller.signal;
    let response = await Promise.race([
      fetch(url, { signal }),
      apiTimeout(controller, 2000),
    ]);
    console.log(response);
    let data = await response.json();
    console.log(data);
    loadingBtn(btn, false, "Get Data");
  } catch (error) {
    console.log(error);
    alert("Unable to fetch data, try again");
    loadingBtn(btn, false, "Get Data");
  }
}

/// chat gpt

// fetchWithTimeout.js

// async function fetchWithTimeout(url, options = {}, timeout = 5000) {
//   const controller = new AbortController(); // Used to cancel the request
//   const signal = controller.signal;

//   const timeoutId = setTimeout(() => {
//     controller.abort(); // 👈 Cancel the fetch request
//   }, timeout);

//   try {
//     const response = await fetch(url, { ...options, signal });

//     // Always clear timeout if request finishes first
//     clearTimeout(timeoutId);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("✅ API Response:", data);
//     return data;
//   } catch (err) {
//     // AbortError occurs when we cancel the fetch
//     if (err.name === "AbortError") {
//       console.error("❌ Request aborted due to timeout");
//     } else {
//       console.error("❌ Fetch failed:", err.message);
//     }
//     throw err;
//   }
// }

// DEMO
// (async () => {
//   console.log("Starting API request...");

//   const url = "https://jsonplaceholder.typicode.com/posts/1";

//   try {
//     await fetchWithTimeout(url, {}, 3000); // timeout after 3s
//   } catch (err) {
//     console.log("Final Catch:", err.message);
//   }
// })();

// Promise.all()
// all are resolve then logic will work

// Promise.allSettled()

async function getMoreData() {
  let url1 = `https://jsonplaceholder.typicode.com/users`;
  let url2 = `https://jsonplaceholder.typicode.com/todos`;
  let url3 = `https://jsonplaceholder.typicode.in/posts`;
  try {
    let responseList = await Promise.allSettled([
      fetch(url1),
      fetch(url2),
      fetch(url3),
    ]);
    console.log(responseList);
  } catch (error) {
    console.log(error);
  }
}

// getMoreData();

let product = {
  _name: "Dell",
  price: 40000,
  stock: 10,
};

let book = {
  _name: "Harry Potter",
  price: 10000,
  stock: 10,
};

function printData(a, b, c) {
  console.log(a, b, c);
  console.log(this._name);
}

printData.call(product, 10, 20, 30);

let printParameter = [100, 200, 300];
printData.apply(product, printParameter);

let newFun = printData.bind(product);
newFun(110, 220, 330);
// JS Object => JSON

// class

class Human {
  // name = "Deepakkumar";
  // legs = 2;
  constructor(_name) {
    this.name = _name;
  }

  running() {
    console.log(`${this.name} is running`);
  }
}

class Child extends Human {
  constructor(name) {
    super(name);
  }

  running() {
    super.running();
    console.log("running");
  }
}

let human = new Child("Suraj");
human.running();

// console.log(human._hands);
// functional programming

let number = 10;
function add(a, b) {
  let result = a + b; // 777
  return result;
} //  pure function

let array = [10, 20, 30];

sub(function () {});

function div() {
  return function () {};
}

// currying function

let fun = (a) => (b) => (c) => a + b + c;

fun(10)(20)(30);

function myFun(value) {
  let result = 0;

  function next(v) {
    if (v === undefined) return result;
    result += v;
    return next;
  }

  if (value === undefined) return result;
  result += value;
  return next;
}
myFun();

// array
// mock session =>
// ES6
// React
// Typescript

function login(status, callback) {
  if (status === true) callback();
}

login(true, () => {
  window.location.replace("/dashboard");
});

let times = 3;
function login1(attempt) {
  if (attempt === 0) {
    return null;
  }
  return login1(attempt - 1);
}

login1(3);
