function testPromise(timeout, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const text = "Hello World";
      if (typeof cb !== "function") {
        return reject("cb bukan sebuah fungsi");
      }
      const result = cb(text);
      resolve(result);
    }, timeout);
  });
}

async function doAsync(timeout, func, cb) {
  const result = await func(timeout, cb);
  console.log(`result = ${result}`);
}

doAsync(200, testPromise, (inp) => {
  return inp.split(" ").join("-");
});

doAsync(500, testPromise, {});
