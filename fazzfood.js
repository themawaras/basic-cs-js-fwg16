function fazzFood(harga, voucher, jarak, pajak) {
  // validasi
  if (typeof harga !== "number" || typeof jarak !== "number") return "Input harus angka";
  if (typeof pajak !== "boolean") return "Masukkan boolean untuk konfirmasi pajak restoran";

  // menghitung total pajak
  let totalPajak;

  if (pajak) {
    totalPajak = (harga * 5) / 100;
  } else {
    totalPajak = 0;
  }

  // menghitung total biaya perjalanan berdasarkan jarak
  let distanceCost;
  if (jarak <= 2) {
    distanceCost = 5000;
  } else {
    let totalJarak = jarak - 2;
    let costJarak = totalJarak * 3000;
    distanceCost = costJarak + 5000;
  }

  // menghitung dan memvalidasi total diskon
  let totalDiskon;
  if (voucher === "FAZZFOOD50" && harga >= 50000) {
    totalDiskon = (harga * 50) / 100;
    if (totalDiskon > 50000) {
      totalDiskon = 50000;
    } else {
      totalDiskon == totalDiskon;
    }
  } else if (voucher === "DITRAKTIR60" && harga >= 25000) {
    totalDiskon = (harga * 60) / 100;

    if (totalDiskon > 30000) {
      totalDiskon = 30000;
    } else {
      totalDiskon == totalDiskon;
    }
  } else {
    console.log("Transaksi anda kurang dari pembelian minimal");
  }

  // menghitung grand total
  let grandTotal = totalPajak + distanceCost + harga - totalDiskon;

  console.log(`
                Harga       : ${harga}
                Potongan    : ${totalDiskon}
                Biaya antar : ${distanceCost}
                Pajak       : ${totalPajak}
                SubTotal    : ${grandTotal}
            `);
  //   return grandTotal;
}

fazzFood(65000, "DITRAKTIR60", 2, true);
// console.log(fazzFood(65000, "DITRAKTIR60", 2, true));
