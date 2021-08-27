/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';

import NavBar from './components/NavBar/NavBar';
import Pokedex from './components/Pokedex/Pokedex';
import SearchBar from './components/SearchBar/SearchBar';

import { getPokemons, getPokemonData, searchPokemon } from './api'; 
import { FavoriteProvider } from './contexts/favoriteContexts';
import NotPokemon from './components/NotPokemon/NotPokemon';


const localStorageKey ='favorite_pokemons'


const App = () => {

  
  const [pokemons, setPokemons] = useState([]);
  const [page , setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);


  const fetchPokemons = async() => {
    try {
      setLoading(true);
      const data = await  getPokemons(24, 24* page);
      // console.log(data); // nombre y url
      // creo un array de promesas
      const promises = data.results.map(async (pokemon) =>{
        return await getPokemonData(pokemon.url)
      })
      
      const results = await Promise.all(promises)
      setPokemons(results);
      setLoading(false);  
      setTotal(Math.ceil(data.count / 24));
      setNotFound(false);
    } catch (error) {}
  }

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons();
  },[])



  useEffect(() => {
    if(!searching){
      return fetchPokemons()
    }
  }, [page]);



  
  const updateFavoritePokemon = (name) => {
    const updated = [...favorites]
    const isFavorite = favorites.indexOf(name);
    if(isFavorite >=0){
      updated.splice(isFavorite,1)
    }else{
      updated.push(name)
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated))
  }


  const onSearch = async (pokemon) => {
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true)
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if(!result){
      setNotFound(true);
      setLoading(false);
      return
    }else{
      setPokemons([result]);
      setPage(0);
      setTotal(1)
    }
    setLoading(false)
    setSearching(false);
  }


  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemon: updateFavoritePokemon }}
    >
      <div>
        <NavBar/>

        <SearchBar onSearch={onSearch}/>
      
        {notFound ? <NotPokemon/> :
        
        <Pokedex 
          loading={loading}
          pokemons={pokemons} 
          page={page} 
          setPage={setPage}
          total={total}
        />
        }
      </div>
    </FavoriteProvider>
  );
}

export default App;
