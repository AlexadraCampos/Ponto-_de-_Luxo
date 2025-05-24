const cart = [];
let cartOpen = false;

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  openCart();
  renderCart();
}

function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  renderCart();
}

function updateQuantity(id, change) {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity = Math.max(1, item.quantity + change);
  }
  renderCart();
}

function openCart() {
  document.getElementById("cartDrawer").style.display = "block";
  cartOpen = true;
}

function closeCart() {
  document.getElementById("cartDrawer").style.display = "none";
  cartOpen = false;
}

function renderCart() {
  const cartContainer = document.getElementById("cartItems");
  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" width="60" />
      <div>
        <h4>${item.name}</h4>
        <p>R$ ${item.price.toFixed(2)}</p>
        <div>
          <button onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
        <p>Total: R$ ${itemTotal.toFixed(2)}</p>
        <button onclick="removeFromCart(${item.id})">Remover</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });

  document.getElementById("cartTotal").innerText = `R$ ${total.toFixed(2)}`;
}
