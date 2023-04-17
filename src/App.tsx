import { useState, useEffect, Children } from 'react'
import axios from 'axios'
import './Styles/App.css'

import PokedexImg from './Imagens/Pokedex.png'
import BtnNext from './Imagens/Next.png'
import BtnPrev from './Imagens/Prev.png'
import {Pokedex,PokemonImg,PokemonName,PokemonInfo,PokemonChange,Pagina,MaskButton,PokemonFind,Effect

} from './Styles/styled'

import { CreatePokemon } from './CodesExtends/PokemonExport'
import { TypePokemon } from  './CodesExtends/PokemonType';
import { EffectExport } from  './CodesExtends/EffectExport';


function App() {
  const [Pokemon, setPokemon] = useState<TypePokemon>({
    id: "1",
    name: "Carregando ...",
    animation: "a"
  })
  const [PokemonId, setPokemonId] = useState<number>(1)
  const [PokemonEffect, setPokemonEffect] = useState<string | undefined>("")

  function PrevPokemon(){
    if(PokemonId==1){
      alert('Não há pokemons antes desse')
    }else{
      GetPokemon(PokemonId-1)
      setPokemonId(PokemonId-1)
    }
  }
  function NextPokemon(){
    GetPokemon(PokemonId+1)
    setPokemonId(PokemonId+1)
  }

  async function GetPokemon(pokemon: number | string){
    // const pokemonLoading:TypePokemon = {
    //   id: "undefined",
    //   name: "Carregando ...",
    //   animation: Pokemon.animation
    // }
    // setPokemon(pokemonLoading)
    const PokemonAPI:any = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(PokemonAPI.status === 200){
      console.log(PokemonAPI.data)
      const data = PokemonAPI
      RenderPokemon(data);
    }if(PokemonAPI.status === 404){
      const pokemon:TypePokemon = {
        id: "undefined",
        name: "Pokemon não encontrado :(",
        animation: "https://thumbs.gfycat.com/ShallowDescriptiveAplomadofalcon-max-1mb.gif"
      }
      setPokemon(pokemon)
    }
  }

  async function RenderPokemon(DataPokemon: any){
    if(DataPokemon){
      const effect = EffectExport(DataPokemon.data.types[0].type.name)
      setPokemonEffect(effect)
      setPokemonId(DataPokemon.data.id)
      const criar = CreatePokemon(DataPokemon.data);
      setPokemon(criar);
    }
  }

  const FindNamePokemon = (e: any) => {
    e.preventDefault()
    const pokemonName = e.target[0].value;
    GetPokemon(pokemonName.toLowerCase())
  }

  useEffect(()=>{
    GetPokemon(1)
  },[])

  return (
    <Pagina>
      <div>
        {Pokemon &&
          <>
            <PokemonInfo>
              <PokemonName>{Pokemon.name}</PokemonName>
              <PokemonImg>
                <img src={Pokemon.animation} alt="pokemon" />
              </PokemonImg>
            </PokemonInfo>
            <Effect>
              <img src={PokemonEffect}></img>
            </Effect>
          </>
        }
        <PokemonChange>
          <img src={BtnPrev} onClick={PrevPokemon}></img>
          <img src={BtnNext} onClick={NextPokemon}></img>
        </PokemonChange>
        <MaskButton>
          <img src={BtnPrev}></img>
          <img src={BtnNext}></img>
        </MaskButton>
        <PokemonFind>
          <form onSubmit={FindNamePokemon}>
            <input type="text"></input>
            <button type="submit">buscar</button>
          </form>
        </PokemonFind>
        <Pokedex src={PokedexImg}></Pokedex>
        {/* <audio controls>
          <source src={'https://assets.mixkit.co/active_storage/sfx/1714/1714-preview.mp3'}></source>
        </audio> 
        <img src={'https://cdn.dribbble.com/userupload/3875672/file/original-42f52449520e8e7940c668566888d84f.png?compress=1&resize=752x'}></img>*/}
      </div>
    </Pagina>
  )
}

export default App
