import Avatar from "@/componentes/avatar";
import Botao from "@/componentes/botao";
import UploadImagem from "@/componentes/uploadImagem";
import { useRef, useState } from "react";

export default function Home() {

  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  return (
    <div>
      <h1>Ola Mundo!</h1>

      <button onClick={() => referenciaInput?.current.click()}>abrir seletor de arquivos</button>

      <UploadImagem 
        setImagem={setImagem} 
        imagemPreview={imagem?.preview}
        aoSetarAReferencia={(ref) => referenciaInput.current = ref}  
      />

      <Avatar />

      <Botao texto={'Login'} cor="primaria" desabilitado={false} manipularClique={() => {
        console.log('Botao clicado!')
      }} />

    </div>
  )
}
