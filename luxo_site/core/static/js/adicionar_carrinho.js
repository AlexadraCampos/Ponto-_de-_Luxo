function abrirCarrinho() {
    document.getElementById("carrinho-lateral").style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById("carrinho-lateral").style.display ='none';
}



document.querySelectorAll('.btn-carrinho').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    const card = this.closest('.card');
    const nome = card.querySelector('h3').innerText;
    const precoTexto = card.querySelector('.preco').innerText.replace('R$', '').replace('.', '').replace(',', '.');
    const preco = parseFloat(precoTexto);
    const li = document.createElement('li');
    li.innerText = `${nome} - R$ ${preco.toFixed(2).replace('.', ',')}`;
    document.getElementById('produtos').appendChild(li);

    atualizarTotal(preco);
    abrirCarrinho();

    
  });
});






let totalCarrinho = 0;
function atualizarTotal(preco) {
    totalCarrinho += preco;
    document.getElementById('total-carrinho').innerHTML = `<strong>Total:</strong> R$ ${totalCarrinho.toFixed(2).replace('.', ',')}`;
}
