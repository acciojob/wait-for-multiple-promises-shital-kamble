//your JS code here. If required.

console.log("Promise Methods");

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Could not resolve promise 2");
    resolve("Promise 2");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 3000);
});
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 4");
  }, 4000);
});

const myArray = [promise1, promise2, promise3, promise4];

Promise.all(myArray)
  .then((res) => {
    console.log("ANY", res);
  })
  .catch((e) => console.log(e));
