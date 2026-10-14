// 1. Captura os elementos do seu HTML (Ajustado para o novo HTML limpo)
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

// CORRIGIDO: Como o botão Enviar saiu de dentro da div do email, buscamos ele direto
const botaoEnviar = document.querySelector(".botao"); 
const botaoMostrarSenha = document.querySelector(".botao2");

// 2. Validação do Login ao clicar em "Enviar"
botaoEnviar.addEventListener('click', () => {
    const emailDigitado = campoEmail.value.trim();
    const senhaDigitada = campoSenha.value.trim();

    // Bloqueia se os campos estiverem vazios
    if (emailDigitado === "" || senhaDigitada === "") {
        alert("⚠️ Por favor, preencha o e-mail e a senha!");
        return;
    }

    // Dados corretos para o teste
    const emailValido = "will@lima.com";
    const senhaValida = "1234";

    // COMPARAÇÃO SEGURA: Só entra se o Email E a Senha forem idênticos aos válidos
    if (emailDigitado === emailValido && senhaDigitada === senhaValida) {
        alert("✅ Login realizado com sucesso!");
    } else {
        alert("❌ E-mail ou senha incorretos");
    }
});

// 3. Ação do botão de senha (mostrar / esconder)
botaoMostrarSenha.addEventListener("click", () => {
    // CORRIGIDO: Se o tipo for text (visível), muda para password (esconde) e o botão diz 'senha'
    if (campoSenha.type === 'text') {
        campoSenha.type = 'password';
        botaoMostrarSenha.textContent = 'senha';
    } else {
        campoSenha.type = 'text';
        botaoMostrarSenha.textContent = 'esconder';
    }
});
