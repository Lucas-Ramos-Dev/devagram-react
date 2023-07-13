//validadores para os respectivos atributos (nome, email, senha, confirmaSenha)
const validarNome = (nome) => {
    return nome?.toString().length > 2;
}

const validarEmail = (email) => {
    const emailStr = email?.toString();
    return emailStr.length >= 5 && emailStr.includes('@') && emailStr.includes('.');
}

const validarSenha = (senha) => {
    return senha?.toString().length > 3;
}

const validarConfirmacaoSenha = (senha, confirmacaoSenha) => {
    return validarSenha(senha) && senha === confirmacaoSenha;
}

export {
    validarNome,
    validarEmail,
    validarSenha,
    validarConfirmacaoSenha
}