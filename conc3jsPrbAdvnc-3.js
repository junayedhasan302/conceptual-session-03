// 3. Write a function with a default parameter for discount percentage (10%) that returns the discounted price of an item.

function discountedPrice(price, discount = 10) {
    return price - (price * discount / 100);
}
console.log(discountedPrice(1000));
console.log(discountedPrice(1000, 20));