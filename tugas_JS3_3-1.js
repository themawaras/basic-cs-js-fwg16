// Cek Tiket Reduksi

function cekReduksi(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof age !== "number") {
        return reject("Input umur salah. Masukkan data angka/number");
      }

      if (age < 60) {
        return reject(`Umur anda belum termasuk dalam kategori harga reduksi`);
      } else {
        return resolve("Umur anda termasuk dalam kategori harga reduksi");
      }
    }, 1000);
  });
}

// then-catch
const onSuccess = (message) => {
  console.log(message);
};
const onError = (err) => {
  console.log(err);
};

cekReduksi(59).then(onSuccess).catch(onError);

// try-catch
async function asyncReduksi() {
  try {
    const result = await cekReduksi("90");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

asyncReduksi();
