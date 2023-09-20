function reverseWords(text) {
  let scan = text + " "; // add whitespace/spasi untuk mendeteksi akhir dari text di perulangan nantinya
  let temp = [];
  let result = [];

  // scaning item dari setiap index
  for (i = 0; i < scan.length; i++) {
    if (scan[i] !== " ") {
      // jika tidak menemukan whitespace/spasi maka setiap huruf akan dimasukkan ke dalam var temp
      temp = temp + scan[i];
    } else {
      // jika menemukan whitespace/spasi maka akan memasukkan seluruh isi dari var temp ke dalam var result
      result = temp + " " + result;
      temp = []; // mengosongkan kembali var temp untuk digunakan perulangan berikutnya
    }
  }
  return result;
}

// reverseWords("saya belajar");
console.log(reverseWords("saya belajar JS"));
