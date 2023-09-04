const matematika = 90;
const bahasaIndonesia = 90;
const bahasaInggris = "s";
const ipa = 50;

let sum = matematika + bahasaIndonesia + bahasaInggris + ipa;
let average = sum / 4;

if (!average) {
  console.log("Masukkan nilai integer");
} else {
  if (average <= 59) {
    console.log("Rata-rata = ", average);
    console.log("Grade = E");
  } else if (average <= 69) {
    console.log("Rata-rata = ", average);
    console.log("Grade = D");
  } else if (average <= 79) {
    console.log("Rata-rata = ", average);
    console.log("Grade = C");
  } else if (average <= 89) {
    console.log("Rata-rata = ", average);
    console.log("Grade = B");
  } else {
    console.log("Rata-rata = ", average);
    console.log("Grade = A");
  }
}
