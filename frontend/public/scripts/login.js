async function enviarDados(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://127.0.0.1:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.text();
            localStorage.setItem('userData', data); // Salva a resposta no localStorage
            alert('Login bem-sucedido!');
            window.location.href = './index.html';
        } else {
            alert('Login falhou. Verifique suas credenciais.');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Ocorreu um erro. Tente novamente mais tarde.');
    }
}

// Adiciona o evento de envio ao formulário
