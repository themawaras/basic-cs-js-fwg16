function callback(input) {
  return input;
}

function asyncFunc(timeout, cb) {
  // wait 1000 ms
  setTimeout(() => {
    const text = "Hello World";
    const result = cb(text);
    console.log(result);
  }, timeout);
}

// asyncFunc(callback);
// asyncFunc((inp) => {
//   return inp.split(" ");
// });
asyncFunc(1000, (inp) => {
  return inp.split(" ");
});
asyncFunc(1500, (inp) => {
  return inp.split("");
});
asyncFunc(2000, (inp) => {
  return inp.split(" ").map((val) => {
    return val.toUpperCase();
  });
});
