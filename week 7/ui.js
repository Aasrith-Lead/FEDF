import { cart, remove, getTotal } from './cart.js';

export function drawCart(c) {
  const cartBox = document.getElementById("cartBox");
  const totalBox = document.getElementById("totalBox");

  cartBox.innerHTML = "";

  c.forEach((b, i) => {
    let div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${b.title} - ₹${b.price}</span>
      <button class="removeBtn" data-id="${i}">Remove</button>
    `;
    cartBox.appendChild(div);
  });

  cartBox.querySelectorAll("button").forEach(btn => {
    btn.onclick = (e) => {
      let id = e.target.getAttribute("data-id");
      remove(id);
      drawCart(cart);
    };
  });

  totalBox.textContent = "Total: ₹" + getTotal();
}
