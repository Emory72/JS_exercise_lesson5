function pay(km, price1, price2, price3, price4, price5) {
  let km = +document.getElementById("input-km").value;
  let name = document.getElementById("input-name").value;
  let price = pay(km, 500, 650, 850, 1100, 1300);

  if (km <= 50) {
    price += price1 * km;
  } else if (km <= 100) {
    price += price1 * 50 + (km - 50) * price2;
  } else if (km <= 200) {
    price += price1 * 50 + price2 * 50 + (km - 100) * price3;
  } else if (km <= 350) {
    price += price1 * 50 + price2 * 50 + price3 * 100 + price4 * (km - 200);
  } else {
    price +=
      price1 * 50 +
      price2 * 50 +
      price3 * 100 +
      price4 * 150 +
      price5 * (km - 350);
  }

  return price;
}
// Hiển thị gía tiền ra giao diện
function display(price) {
  document.getElementById("xuatTien").innerHTML = ` ${price.toLocaleString()}`;
}
