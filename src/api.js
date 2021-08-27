export const searchPokemon = async (pokemon) => {
    try{
        let URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        const response = await fetch(URL);
        const data = await response.json();
        return data;

    }catch(error){
        console.log(error)
    }
}


export const getPokemons = async (limit = 24, offset=0) => {
    try{
        let URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(URL);
        const data = await response.json();
        return data;

    }catch(error){
        console.log(error)
    }
}


export const getPokemonData = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json()
        return data;
    }catch(err){

    }
}