const arr = ["banana", "orange", "apple", "lemon", "grape", "watermelon"];
const kalimat = "BUDI senang sekali memakan buah-buahan";
const kalimat2 = " di pinggir sawah";

//contoh 1 [pop] : menghapus/membuang element paling belakang dari sebuah array dan mengembalikan array yang dibuang // mutasi
const pop = arr.pop();
console.log("element yang dihapus : " + pop);

//contoh 2 [slice] : memotong element string berdasarkan indexing
const potong = kalimat.slice(5, 10); // (index awal, index akhir)
console.log("element yang dipotong dari slice(5, 10) : " + potong);

//contoh 3 [length] : menghitung panjang element
const panjang = arr.length;
console.log(`panjang array yaitu: ${panjang}`);

//contoh 4 [concat] : menggabungkan 2 variable string yang berbeda
const kal12 = kalimat.concat(kalimat2);
console.log(`Menggabungkan kedua arr dengan concat: ${kal12}`);

//contoh 5 [charAt] : memanggil spesifik index dari sebuah string
const charAt = kalimat2.charAt(1);
console.log(`mengambil sebuah karakter charAt(1): ${charAt}`);

//contoh 6 [toLowerCase] //mengubah string menjadi huruf kecil
const kalimatKecil = kalimat.toLowerCase();
console.log(`toLowerCase: ${kalimatKecil}`);

//contoh 7 [toUpperCase] //mengubah string menjadi huruf kapital
const kalimatBesar = kalimat.toUpperCase();
console.log(`toUpperCase: ${kalimatBesar}`);

// contoh 8 [forEach] // untuk memanggil fungsi untuk setiap item dan index dari sebuah array
arr.forEach((item, index) => {
  console.log(`${index} : ${item}`);
});

// contoh 9 [filter] // untuk mengakses setiap elemen dari array
arr.filter((fruit) => {
  if (fruit.length < 6) {
    console.log(`filter : ${fruit}`);
  }
});

// contoh 10 [replace] // method untuk mencari bentuk spesifik dari string lalu menggantinya dengan string yang telah ditentukan
console.log(kalimat.replace("memakan", "menanam"));
