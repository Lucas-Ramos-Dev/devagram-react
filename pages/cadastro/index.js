import Image from "next/image";
import Link from "next/link";
import Botao from "@/componentes/botao";
import { useState } from "react";
import UploadImagem from "@/componentes/uploadImagem";
import { validarNome, validarEmail, validarSenha, validarConfirmacaoSenha } from '../../util/validadores';


import InputPublico from "@/componentes/inputPublico";
import imagemLogo from "../../public/imagens/logo.svg";
import imagemUsuarioAtivo from "@/public/imagens/usuarioAtivo.svg";
import imagemEnvelope from "@/public/imagens/envelope.svg";
import imagemChave from "@/public/imagens/chave.svg";
import imagemAvatarFoto from "@/public/imagens/avatarFoto.svg";


export default function Cadastro() {
    const [imagem, setImagem] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    
    return (
        <section className={"paginaCadastro paginaPublica"}>
            <div className="logoContainer desktop">
                <Image src={imagemLogo} alt="Logotipo" fill className="logo" />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
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
                        desabilitado={false}
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
