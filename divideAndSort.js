// 5956560159466056

function divideAndSort(number) {
  arrNumber = number.toString().split("0"); // konversi dari bentuk integer ke string lalu konversi lagi ke array dengan pemisah angka "0"
  let temp = [];
  let stringTemp;
  let collect = [];

  for (let i = 0; i < arrNumber.length; i++) {
    temp = temp + arrNumber[i]; // memasukkan elemen index i ke dalam variabel sementara 'temp'
    stringTemp = temp.toString().split("").sort(); // seperti konversi di awal: konversi dari bentuk integer ke string lalu konversi lagi ke array, lalu di sorting
    collect = collect.concat(stringTemp); // menggabungkan array 'collect' dengan array baru dari 'stringTemp'
    temp = []; // mengosongkan kembali array
    stringTemp = []; // mengosongkan kembali
    //   console.log(collect);
  }

  collect = collect.join("");
  return collect;
}

console.log(divideAndSort(5956560159466056));
