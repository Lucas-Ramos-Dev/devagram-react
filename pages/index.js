import Avatar from "@/componentes/avatar";
import Botao from "@/componentes/botao";
import UploadImagem from "@/componentes/uploadImagem";

export default function Home() {
  return (
    <div>
      <h1>Ola Mundo!</h1>
      <UploadImagem />
      <Avatar />
      <Botao texto={'Login'} cor="primaria" desabilitado={false} manipularClique={() => {
        console.log('Botao clicado!')
      }}/>
    </div>
  )
}
