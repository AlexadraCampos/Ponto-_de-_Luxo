function abrirCarrinho() {
    document.getElementById("carrinho-modal").style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById("carrinho-modal").style.display ='none';
}


document.querySelectorAll(".btn-fechar").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    fecharCarrinho();
  });
});

let totalCarrinho = 0;

function atualizarTotal(preco) {
  totalCarrinho += preco;
  document.querySelector(".total strong").innerText = ` R$ ${totalCarrinho
    .toFixed(2)
    .replace(".", ",")}`;
}

//botões Compra
document.querySelectorAll(".btn-carrinho").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const card = this.closest(".card");
    const nome = card.querySelector("h3").innerText;
    const precoTexto = card
      .querySelector(".preco")
      .innerText.replace("R$", "")
      .replace(".", "")
      .replace(",", ".");
    const preco = parseFloat(precoTexto);

    const novoItem = document.createElement("div");
    novoItem.classList.add("carrinho-item");

    novoItem.innerHTML = `
      <img src="${card.querySelector("img").src}" alt="Produto" />
      <div class="item-info">
        <p class="nome-produto">${nome}</p>
        <span class="quantidade">1</span>
        <p class="preco">R$ ${preco.toFixed(2).replace(".", ",")}</p>
      </div>
      <button class="btn-remover">✕</button>
    `;

    document
      .querySelector(".carrinho-footer")
      .insertAdjacentElement("beforebegin", novoItem);

    atualizarTotal(preco);
    abrirCarrinho();

    // remover item ao clicar no ✕
    novoItem.querySelector(".btn-remover").addEventListener("click", () => {
      novoItem.remove();
      totalCarrinho -= preco;
      atualizarTotal(0); // forçar atualização do valor
      document.querySelector(".total strong").innerText = ` R$ ${totalCarrinho
        .toFixed(2)
        .replace(".", ",")}`;
    });
  });
});