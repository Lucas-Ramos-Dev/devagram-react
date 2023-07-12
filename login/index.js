/* eslint-disable jsx-a11y/alt-text */
import InputPublico from "@/componentes/inputPublico";
import Botao from "@/componentes/botao";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import imagemEnvelope from '@/public/imagens/envelope.svg';
import imagemChave from '@/public/imagens/chave.svg'
import imagemLogo from '@/public/imagens/logo.svg'


export default function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    return(
        <section className={"paginaLogin paginaPublica"}>
            <div className="logoContainer">
                <Image
                    src={imagemLogo}
                    alt="Logotipo"
                    fill
                    className="logo"
                />
            </div>

            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico
                        imagem={imagemEnvelope}
                        texto="E-mail"
                        tipo="email"
                        aoAlterarValor={e => setEmail(e.target.value)}
                        valor={email}
                    />

                    <InputPublico
                        imagem={imagemChave}
                        texto="Senha"
                        tipo="password"
                        aoAlterarValor={e => setSenha(e.target.value)}
                        valor={senha}
                    />

                    <Botao 
                        texto={"Login"}
                        tipo="submit"
                        desabilitado={false}
                    />
                </form>

                <div className="rodapePaginaPublica">
                    <p>Nao possui uma conta?</p>
                    <Link href="/cadastro">Faca seu cadastro agora</Link>
                </div>

            </div>
        </section>

    )

}