import { bookList } from './data.js';
import { add, cart } from './cart.js';
import { drawCart } from './ui.js';

export function show() {
  const box = document.getElementById("booksBox");
  box.innerHTML = "";

  bookList.forEach((b, i) => {
    let div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <div>
        <b>${b.title}</b><br>
        <small>${b.author}</small><br>
        ₹${b.price}
      </div>
      <div>
        ${b.availability === "in stock" 
          ? `<button data-id="${i}">Buy</button>` 
          : `<span style="color:red;">Out of Stock</span>`}
      </div>
    `;
    box.appendChild(div);
  });

  // buy buttons
  box.querySelectorAll("button").forEach(btn => {
    btn.onclick = (e) => {
      let id = e.target.getAttribute("data-id");
      add(bookList[id]);
      drawCart(cart);
    };
  });
}
