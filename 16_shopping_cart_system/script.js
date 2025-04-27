//✅ 1. Create an Array called cart
const cart = [
  { itemName: "Screen Protector", price: 49, quantity: 1 },
  // { itemName: "USB Cable", price: 29, quantity: 1 }
];

//✅ 2. Functions to create:
// addItem(item) → Adds an item to the cart.
// removeItem(itemName) → Removes item by name.
// getCartTotal() → Returns total cart value.
// listCart() → Print all items with details.

const addItem = (item) => cart.push(item);
const removeItem = (itemName) => {
  const index = cart.findIndex((item) => item.itemName === itemName);

  if (index !== -1) {
    cart.splice(index, 1);
    return `${itemName} removed from cart!`;
  } else {
    return `${itemName} not found in cart!`;
  }
};
const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

const listCart = () => cart.forEach((item) => console.log(item));

addItem({ itemName: "Headphone", price: 499, quantity: 1 });
addItem({ itemName: "Power Bank", price: 199, quantity: 1 });
addItem({ itemName: "Earphone", price: 299, quantity: 2 });
addItem({ itemName: "Phone Case", price: 99, quantity: 1 });

console.log(cart);
console.log(removeItem("Headphone"));
console.log("cart ::>", cart);

console.log(getCartTotal())