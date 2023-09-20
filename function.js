// fungsi cek ongkir

function shippingCost(distance) {
  let output;
  if (distance < 2) {
    return (output = 5000);
  } else {
    const diff = distance - 2;
    const diffCost = diff * 3000;
    output = 5000 + diffCost;
  }
  return output;
}

const ongkir = shippingCost(1);
console.log(ongkir);
