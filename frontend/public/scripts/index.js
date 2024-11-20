function verificarLogin() {
    const userData = localStorage.getItem('userData');
    const loginButton = document.querySelector('button a[href="./login.html"]');
    const logoutButton = document.createElement('button');
    
    if (userData) {
        // Se os dados do usuário existirem, exibe o botão de sair
        logoutButton.textContent = 'Sair';
        logoutButton.onclick = () => {
            localStorage.removeItem('userData'); // Remove os dados do localStorage
            window.location.reload(); // Recarrega a página para atualizar os botões
        };
        document.querySelector('header').appendChild(logoutButton);
        loginButton.parentNode.parentNode.removeChild(loginButton.parentNode);
    }


}

async function fetchDonuts() {
    try {

        const filterPromotion = document.getElementById('filterPromotion').checked;
        const filterCategory = document.getElementById('filterCategory').checked;
        let url = 'http://127.0.0.1:3000/product/list-all';
        const queryParams = new URLSearchParams();
        if (filterPromotion) {
            queryParams.append('promotion', 'true');
        }
        if (filterCategory) {
            queryParams.append('category', 'especial');
        }
        url += `?${queryParams.toString()}`;

        console.log(filterPromotion, filterCategory);


        response = await fetch(url);
        const donuts = await response.json();

        const mainDiv = document.querySelector('main > div');
        const itemDivs = mainDiv.querySelectorAll('.item');
        itemDivs.forEach(div => div.remove()); // Remove as divs existentes com a classe item

        donuts.forEach(donut => {
            const donutDiv = document.createElement('div');
            donutDiv.classList.add('item');
            donutDiv.innerHTML = `
                <img src="${donut.urlImage}" alt="${donut.name}">
                <h3>${donut.name}</h3>
                <p>R$ ${donut.price}</p>
                <button><a href="./detail.html?id=${donut.id}">Detalhes</a></button>
            `;
            mainDiv.appendChild(donutDiv);
        });
    } catch (error) {
        console.error('Erro ao buscar os donuts:', error);
    }
}

// Chama as funções ao carregar a página
window.onload = () => {
    verificarLogin();
    fetchDonuts();
};

