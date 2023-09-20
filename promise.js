// BENTUK CODE SYNCHRONOUS
// let janjian = new Promise((resolve, reject) => {
//   let isRaining = false;
//   if (isRaining) {
//     return reject("Cuaca sedang hujan");
//   }
//   return resolve("Bersiap keluar rumah");
// });

// console.log(janjian);

// BENTUK CODE ASYNCHRONOUS
let janjian = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isRaining = true;
    if (isRaining) {
      return reject("Cuaca sedang hujan");
    }
    return resolve("Bersiap keluar rumah");
  }, 1000);
});

const onSuccess = (success) => {
  console.log(success);
};
const onError = (err) => {
  console.log(err);
};

janjian.then(onSuccess).catch(onError);
