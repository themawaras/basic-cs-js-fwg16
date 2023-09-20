function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  //validasi
  if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number") return "Input number only";
  if (!Array.isArray(dataArray) || dataArray.length < 5) return "Data must be an array or data must be more than 5";
  if (nilaiAwal > nilaiAkhir) return "nilaiAkhir must be greater than nilaiAwal";

  let result = [];

  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
      result.push(dataArray[i]);
    }
  }
  const sortResult = result.sort((a, b) => a - b);

  if (sortResult.length === 0) {
    return "Nilai tidak ditemukan";
  }

  return sortResult;
}

console.log(seleksiNilai(5, 20, [1, 2, 3, 17, 10, 7, 8, 21, 20, 25, 9]));
console.log(seleksiNilai(15, 3, [1, 2, 3, 17, 10, 7, 8, 21, 20, 25, 9]));
console.log(seleksiNilai(4, 17, [2, 25, 4]));
console.log(seleksiNilai(5, 17, [2, 25, 1, 4, 30, 18]));
