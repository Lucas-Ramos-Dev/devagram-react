import Image from "next/image";
import Link from "next/link";
import Botao from "@/componentes/botao";
import { useState } from "react";
import UploadImagem from "@/componentes/uploadImagem";


import InputPublico from "@/componentes/inputPublico";
import imagemLogo from "../../public/imagens/logo.svg";
import imagemUsuarioAtivo from "@/public/imagens/usuarioAtivo.svg";
import imagemEnvelope from "@/public/imagens/envelope.svg";
import imagemChave from "@/public/imagens/chave.svg";
import imagemUsuarioCinza from "@/public/imagens/usuarioCinza.svg";


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
                        imagemPreview={imagem?.preview || imagemUsuarioCinza.src}
                    />

                    <InputPublico
                        imagem={imagemUsuarioAtivo}
                        texto="Nome Completo"
                        tipo="text"
                        aoAlterarValor={(e) => setNome(e.target.value)}
                        valor={nome}
                    />

                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={(e) => setEmail(e.target.value)}
                        valor={email}

                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlterarValor={(e) => setSenha(e.target.value)}
                        valor={senha}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Confirme Senha"
                        tipo="password"
                        aoAlterarValor={(e) => setConfirmacaoSenha(e.target.value)}
                        valor={confirmacaoSenha}
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
