/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react";

export default function UploadImagem({
    className='',
    setImagem,
    imagemPreview,
    imagemPreviewClassName='null',
    aoSetarAReferencia='null'
}){
    const referenciaInput = useRef(null);

    useEffect(() => {
        if(!aoSetarAReferencia){
            return;
        }
            aoSetarAReferencia(referenciaInput?.current);

    }, [referenciaInput?.current]);

    const abrirSeletorContainer = () => {
        referenciaInput?.current?.click();
    }

    const aoAlterarImagem = () => {
        console.log('aoAlterarImagem');

        if(!referenciaInput?.current?.files?.length){
            return;
        }
            const arquivo = referenciaInput?.current?.files[0];
            const fileReader = new FileReader();
            fileReader.readAsDataURL(arquivo); //read a file and returns a URL
            fileReader.onloadend = () => {
                setImagem({
                    preview: fileReader.result,
                    arquivo,
                });

            }
    }
    
    return(
        <div className={`uploadImagemContainer ${className}`} onClick={abrirSeletorContainer}>
            {imagemPreview && (
                <div className="imagemPreviewContainer">
                    <img
                        src={imagemPreview}
                        alt="Imagem preview"
                        className={imagemPreviewClassName}
                    />
                </div>
            )}
            <input 
                type="file" 
                className="oculto" 
                accept="Image/*"
                ref={referenciaInput}
                onChange={aoAlterarImagem} 
            />
        </div>
    )
}