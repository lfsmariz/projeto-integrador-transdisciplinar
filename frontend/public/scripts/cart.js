function fetchCart() {
    console.log('fetchCart');
    fetch('http://127.0.0.1:3000/cart/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const productList = document.querySelector('.product-list');
        productList.innerHTML = '';

        data.cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'product-item';
            fetch(`http://127.0.0.1:3000/product/${item.productId}`)
            .then(response => response.json())
            .then(product => {
                listItem.textContent = `${product.name} - R$ ${product.price}`;
                productList.appendChild(listItem);
            });
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

fetchCart();