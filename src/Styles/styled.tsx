import Styled, { keyframes } from 'styled-components';

export const Pokedex = Styled.img`
    mix-blend-mode: multiply;
`

export const PokemonInfo = Styled.div`
    position:absolute;z-index:20;
    img:hover{
        transform: scale(1.40);
        /* transform: translate(0px,10px); */
    }
`

export const PokemonChange = Styled.div`
    position:absolute;margin-top:360px;margin-left:60px;z-index:12;
    img{
        margin-left:5px;margin-right:5px;background-color:white;opacity:0.4;transition: transform 1s;
    }img:hover{
        opacity:1;
    }
`

export const MaskButton = Styled.div`
    position:absolute;margin-top:360px;margin-left:60px;z-index:10;
    img{
        margin-left:5px;margin-right:5px;opacity:1;filter:brightness(80%);
    }
`

export const PokemonImg = Styled.div`
    img{
        margin-top:50px;margin-left:60px;width:80px;transition: transform 1s;
    }
`

export const PokemonName = Styled.p`
    margin-top:148px;margin-left:55px;color:#ececec;font-family:'Orbitron', sans-serif;font-size:12px;
    background-color:#7c7c7c88;width:188px;padding:8px;
`

export const Pagina = Styled.div`
    margin:0px;display:flex;justify-content: center;
`

export const PokemonFind = Styled.div`
    position:absolute;z-index:11;
    form{
        margin-top:448px;margin-left:82px;max-width:100px;
    }input{
        max-width:90px;background-color:transparent;border:none;border-bottom:1px solid #141414;
        margin-left:4px;margin-top:4px;font-size:10px;
    }input:focus{
        
    }button{
        width:90px;margin:6px;margin-top:6px;border:1px solid #141414;border-left:2px solid #141414;
        border-bottom:2px solid #141414;background-color:#444444;border-radius:4px;
    }
`

export const Effect = Styled.div`
    position:absolute;z-index:19;margin-top:151px;margin-left:56px;
    img{opacity:0.5;max-width:200px}
`