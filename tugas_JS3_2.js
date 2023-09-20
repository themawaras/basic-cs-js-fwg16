const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry data not found"), []);
    }
  }, 400);
};

const showMonth = (err, dataMonth) => {
  if (err == null) {
    const mapMonth = dataMonth.map((x) => x);
    console.log(mapMonth);
  }
  return err;
};

getMonth(showMonth);
