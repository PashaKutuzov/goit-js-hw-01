function getShippingMessage(country, price, deliveryFee) {

    const totalPrice = price + deliveryFee;

    const message = `Shipping to ${country} will cost ${totalPrice} credits`;

    return message;
}
console.log(getShippingMessage("Australia", 120, 50));