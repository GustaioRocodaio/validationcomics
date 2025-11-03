function togglePassword() {
    const passwordInput = document.getElementById('senha');
    const toggleButton = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = '🔒';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = '👁️';
    }
}

// Função para mostrar mensagens
function showMessage(message, type = 'error') {
    const alertDiv = document.getElementById('alertMessage');
    alertDiv.textContent = message;
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.display = 'block';
    
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 5000);
}

// Simulação de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    
    // Simulação de credenciais (em um sistema real, isso viria de um banco de dados)
    const usuariosValidos = [
        { usuario: 'admin', senha: 'admin123' },
        { usuario: 'cliente', senha: 'cliente123' },
        { usuario: 'validation', senha: 'manga2024' }
    ];
    
    // Verifica se as credenciais são válidas
    const usuarioValido = usuariosValidos.find(u => 
        u.usuario === usuario && u.senha === senha
    );
    
    if (usuarioValido) {
        showMessage('Login realizado com sucesso! Redirecionando...', 'success');
        
        // Simula um delay antes do redirecionamento
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    } else {
        showMessage('Usuário ou senha incorretos! Tente novamente.');
        
        // Efeito visual de erro
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.style.borderColor = '#ff4444';
            setTimeout(() => {
                input.style.borderColor = '#444';
            }, 2000);
        });
    }
});

// Efeitos visuais nos inputs
const inputs = document.querySelectorAll('.form-control');
inputs.forEach(input => {
    // Efeito ao focar
    input.addEventListener('focus', function() {
        this.style.borderColor = '#000000';
    });
    
    // Efeito ao sair
    input.addEventListener('blur', function() {
        this.style.borderColor = '#444';
    });
    
    // Efeito ao digitar
    input.addEventListener('input', function() {
        if (this.value.length > 0) {
            this.style.background = '#363636';
        } else {
            this.style.background = '#2d2d2d';
        }
    });
});

// Enter para submeter o formulário
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    }
});

// Mensagem de boas-vindas baseada no horário
window.addEventListener('load', function() {
    const hora = new Date().getHours();
    let saudacao = '';
    
 
});