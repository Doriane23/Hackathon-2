import React from "react";

function DiscountFeature({ numberOfArticles }) {
  let discount = 0;

  if (numberOfArticles >= 10 && numberOfArticles < 20) {
    discount = 0.05; 
  } else if (numberOfArticles >= 20 && numberOfArticles < 100) {
    discount = 0.1;
  } else if (numberOfArticles >= 100) {
    discount = 0.3;
  }

  const totalPrice = calculateTotalPrice(numberOfArticles, discount);

  return (
    <div>
      <p>Number of article ordered : {numberOfArticles}</p>
      <p>Discount : {discount * 100}%</p>
      <p>Total price after discount : {totalPrice} euros</p>
    </div>
  );
}

function calculateTotalPrice(quantity, discount) {
  const uniquePrice = 10;
  const priceBeforeDiscount = quantity * uniquePrice;
  const discountAmount = priceBeforeDiscount * discount;
  const priceAfterDiscount = priceBeforeDiscount - discountAmount;
  return priceAfterDiscount.toFixed(2);
}

export default DiscountFeature;