function enviarDados(event) {
    event.preventDefault();

    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;

    const dados = {
        name,
        email,
        cpf,
        password
    };


    fetch('http://127.0.0.1:3000/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.text())
    .then(data => {
        console.log('Sucesso:', data);
        alert('Usuário registrado com sucesso!');
    setTimeout(() => {
        window.location.href = './login.html';
    }, 3000);
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Erro ao registrar usuário!');
    });
}