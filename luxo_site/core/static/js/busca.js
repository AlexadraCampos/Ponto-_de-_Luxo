const searchInput = document.querySelector('.search-input');
    const form = document.querySelector('.search-form');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita recarregar a página

      const searchTerm = searchInput.value.toLowerCase();
      const products = document.querySelectorAll('.card');

      let found = false;

      products.forEach(product => {
        const name = product.querySelector('h3').innerText.toLowerCase();
        const desc = product.querySelector('p').innerText.toLowerCase();

        if (name.includes(searchTerm) || desc.includes(searchTerm)) {
          product.style.display = 'block';
          found = true;
        } else {
          product.style.display = 'none';
        }
      });

      if (!found) {
        alert('Nenhum produto encontrado!');
      }
    });