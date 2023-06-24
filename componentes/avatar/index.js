/* eslint-disable @next/next/no-img-element */
import avatarImg from '../../public/imagens/avatarFoto.svg'

export default function Avatar({src}){

    const getAvatar = () => {
        if(src && src !== 'undefined'){
            return src;
        }
            return avatarImg.src;
        
    }

    return(
        <img 
            src={getAvatar()}
            alt='Avatar'
            className='avatar'
        />
    );
}