const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 100);
  });
};

const onSuccess = (success) => {
  console.log(`Hari ini ${success} merupakan hari kerja`);
};
const onError = (err) => {
  console.log(err);
};

async function tryCatch() {
  try {
    const result = await cekHariKerja("rabu");
    console.log(`Hari ini hari ${result}`);
  } catch (error) {
    console.log(`error = ${error}`);
  }
}

// inisialisasi fungsi
const cekHari = cekHariKerja("selasa");

// then-catch
cekHari.then(onSuccess).catch(onError);

// try-catch
tryCatch();
