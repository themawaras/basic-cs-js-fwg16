function volumeTabung(jari, tinggi) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof jari !== "number" || typeof tinggi !== "number") {
        return reject("Masukkan sebuah bilangan");
      }

      const phi = 22 / 7;
      let result = phi * jari * jari * tinggi;
      resolve((Math.round(result * 100) / 100).toFixed(2));
    }, 1500);
  });
}

// then-catch
const onSuccess = (message) => {
  console.log(`Volume dari sebuah tabung yaitu ${message}`);
};
const onError = (err) => {
  console.log(err);
};

volumeTabung(5, "25").then(onSuccess).catch(onError);

// try-catch
async function asyncVol() {
  try {
    const result = await volumeTabung(7, 12);
    console.log(`Volume dari sebuah tabung yaitu ${result}`);
  } catch (error) {
    console.log(error);
  }
}

asyncVol();
