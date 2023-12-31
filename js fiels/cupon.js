document.getElementById("purchase-btn").addEventListener("click", function () {
  const cuponField = document.getElementById("cupon-field");
  const cuponFieldValue = cuponField.value;
  const price = document.getElementById("price");
  const priceValue = parseFloat(price.innerText);
  const paid = document.getElementById("paid");
  const purchaseBtn = document.getElementById("purchase-btn");
  cuponField.value = "";

  if (cuponFieldValue === "DISC30") {

    if (purchaseBtn.innerText === "Purchase !!!") {
      const discount = priceValue * (30 / 100);
      const discountedPrice = priceValue - discount;
      alert("Congrats!! Cupon Matched!!");
      purchaseBtn.innerText = "Purchased";
      paid.innerText = "Paid : " + discountedPrice + "$";
    }
  } 
  else {
    if (purchaseBtn.innerText === "Purchase !!!") {
      alert("moye moye");
      purchaseBtn.innerText = "Purchased";
      paid.innerText = "Paid : " + priceValue + "$";
    }
  }
});
