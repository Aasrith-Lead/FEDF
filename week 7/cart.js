export let cart = [];

export function add(item) {
  cart.push(item);
}

export function remove(i) {
  cart.splice(i, 1);
}

export function getTotal() {
  return cart.reduce((t, b) => t + b.price, 0);
}