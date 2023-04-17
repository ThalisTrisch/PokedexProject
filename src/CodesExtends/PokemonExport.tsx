import { TypePokemon } from "./PokemonType";


export const CreatePokemon = (data: any) => {
    const pokemon: TypePokemon = {
        name: `${data.id} - ${data.name}`,
        id: data.id,
        animation: data.sprites.versions['generation-v']['black-white']['animated']['front_default']
    }
    return pokemon;
}