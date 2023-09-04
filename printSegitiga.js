const printSegitiga = 5;
let print = "";

if (!printSegitiga) {
  console.log("Data harus number!");
} else {
  //
  // perulangan untuk pembuatan baris/row
  for (let row = 0; row < printSegitiga; row++) {
    // console.log(x);

    // perulangan untuk pembuatan kolom/col
    for (let col = 1; col <= printSegitiga - row; col++) {
      print = print + `${col} `;
    }
    print = print + "\n";
  }
}

console.log(print);
