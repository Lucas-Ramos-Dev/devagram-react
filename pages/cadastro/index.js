import Image from "next/image";
import Link from "next/link";
import Botao from "@/componentes/botao";
import { useState } from "react";
import UploadImagem from "@/componentes/uploadImagem";
import { validarNome, validarEmail, validarSenha, validarConfirmacaoSenha } from '../../util/validadores';
import UsuarioService from "@/services/UsuarioService";


import InputPublico from "@/componentes/inputPublico";
import imagemLogo from "../../public/imagens/logo.svg";
import imagemUsuarioAtivo from "@/public/imagens/usuarioAtivo.svg";
import imagemEnvelope from "@/public/imagens/envelope.svg";
import imagemChave from "@/public/imagens/chave.svg";
import imagemAvatarFoto from "@/public/imagens/avatarFoto.svg";

const usuarioService = new UsuarioService();

export default function Cadastro() {
    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");

    const[estaSubmetendo, setEstaSubmetendo] = useState(false);

    const validarFormulario = () => {
        return(
            validarNome(nome)
            && validarEmail(validarEmail)
            && validarSenha(senha)
            && validarConfirmacaoSenha(senha, confirmacaoSenha)
        )
    }

    //metodo que ira ser chamado toda vez que o usuario clicar no botao
    const aoSubmeter = async (e) => {
        //funcao para evitar que a pagina tenha seu comportamento padrao que e o recarregamento e se o formulario nao estiver validado entao e encerrado
        e.preventDefault();
        if(!validarFormulario()){
            return;
        }

        //chegando aqui entao o formulario foi validado e botao fica disponivel para cadastro onde acontece o envio das informacoes e desabilitado o botao novamente para que o usuario nao fique 'submetendo' para nosso backend e tomar um erro 
        setEstaSubmetendo(true);
        
        try {
            const corpoReqCadastro = new FormData();
            corpoReqCadastro.append("nome", nome);
            corpoReqCadastro.append("email", email);
            corpoReqCadastro.append("senha", senha);

            if(imagem?.arquivo) {
                corpoReqCadastro.append("file", imagem.arquivo);
            }

            await usuarioService.cadastro(corpoReqCadastro);
            alert('Cadastro feito com sucesso')

            //TODO: autenticar 

            
        } catch (error) {
            alert('Erro ao cadastrar usuario!' + error?.response?.data?.erro);
        }

        setEstaSubmetendo(false);
    }

    
    return (
        <section className={"paginaCadastro paginaPublica"}>
            <div className="logoContainer desktop">
                <Image src={imagemLogo} alt="Logotipo" fill className="logo" />
            </div>

            <div className="conteudoPaginaPublica">
                <form onSubmit={aoSubmeter}>
                    <UploadImagem
                        imagemPreviewClassName="avatar avatarPreview"
                        setImagem={setImagem}
                        imagemPreview={imagem?.preview || imagemAvatarFoto.src}
                    />

                    <InputPublico
                        imagem={imagemUsuarioAtivo}
                        texto="Nome Completo"
                        tipo="text"
                        aoAlterarValor={(e) => setNome(e.target.value)}
                        valor={nome}
                        mensagemValidacao="O nome precisa de pelo menos 2 caracteres!"
                        exibirMensagemValidacao={nome && !validarNome(nome)}
                    />

                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={(e) => setEmail(e.target.value)}
                        valor={email}
                        mensagemValidacao="E-mail informado e invalido!"
                        exibirMensagemValidacao={email && !validarEmail(email)}

                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlterarValor={(e) => setSenha(e.target.value)}
                        valor={senha}
                        mensagemValidacao="Senha precisa ter pelo menos 3 caracteres!"
                        exibirMensagemValidacao={senha && !validarSenha(senha)}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Confirme Senha"
                        tipo="password"
                        aoAlterarValor={(e) => setConfirmacaoSenha(e.target.value)}
                        valor={confirmacaoSenha}
                        mensagemValidacao="As senhas precisam ser iguais!"
                        exibirMensagemValidacao={confirmacaoSenha && !validarConfirmacaoSenha(senha, confirmacaoSenha)}
                    />

                    <Botao
                        texto={"Cadastrar"}
                        tipo="submit"
                        desabilitado={!validarFormulario() || estaSubmetendo}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Ja possui uma conta?</p>
                    <Link href="/">Faca seu Login agora</Link>
                </div>
            </div>
        </section>
    );
}

/*
Na tela de cadastro onde o usuário ira colocar as informações e submeter(cadastrar)…  
A partir do momento que o usuário colocou as informações e estas foram validadas, o botão (cadastrar) ficara habilitado e o usuário vai clicar para ocorrer tudo certinho com o envio das informações(POST)
O professor comenta que para evitar que o usuário fique clicando no botão e fique 'estourando' o backend cria-se mais uma condição(um state) onde evita este tipo de problema.

Queria saber se seria logico também, criar uma tela de cadastro realizado com sucesso (congratulations), para que depois do envio das informações, fosse apresentado esta tela e com o link de direcionamento para a tela de login que no caso o usuário iria efetuar o login com os dados cadastradas. Seria uma opção de lógica a ser usada?

*/

