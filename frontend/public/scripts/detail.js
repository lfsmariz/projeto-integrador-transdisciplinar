// Função para obter o parâmetro de consulta 'id'
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Função para buscar os dados do produto
async function fetchProductData() {
    const productId = getQueryParam('id');
    console.log(productId);
    console.log(`http://127.0.0.1:3000/product/${productId}`);
    if (productId) {
        try {
            const response = await fetch(`http://127.0.0.1:3000/product/${productId}`);
            const product = await response.json();
            document.getElementById('product-image').src = product.urlImage;
            document.getElementById('product-name').innerText = product.name;
            document.getElementById('product-description').innerText = product.description;
        } catch (error) {
            console.error('Erro ao buscar os dados do produto:', error);
        }
    }
}

document.getElementById('add-to-cart').addEventListener('click', async () => {
    const quantity = document.getElementById('quantity').value;
    const productId = getQueryParam('id');
    
    const body = {
        userId: 1,
        productId: productId,
        quantity: parseInt(quantity)
    };

    try {
        const response = await fetch('http://127.0.0.1:3000/cart/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            const result = await response.text();
            console.log('Produto adicionado ao carrinho:', result);
        } else {
            console.error('Erro ao adicionar produto ao carrinho:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao chamar o endpoint:', error);
    }
});


window.onload = fetchProductData;