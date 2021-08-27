import React, { useContext } from 'react';
import FavoriteContext from '../../contexts/favoriteContexts';
import style from './Pokemon.module.css';

import { ImHeart } from 'react-icons/im'

const Pokemon = (props) => {
    
    const {pokemon} = props;
    
    
    const {favoritePokemons, updateFavoritePokemon} =  useContext(FavoriteContext);
    
    
    const redHeart = <ImHeart className={style.heartRed}/>
    const blackHeart = <ImHeart/>

    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (e) =>  {
        e.preventDefault();
        updateFavoritePokemon(pokemon.name);
    }

    return (
        <div className={style.pokemonCard}>
            <div className={style.imgContainer}>
                <img 
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.name}
                    className={style.pokemonImg}
                /> 
            </div>
            <div className={style.cardBody}>
                <div className={style.cardTop}>
                    <h4>{pokemon.id}</h4>
                    <h3>{pokemon.name}</h3>
                </div>
                <div className= {style.cardBottom} >
                    <div className={ style.pokemonType} >
                        <h4 className={style.tipo}>Tipo:  </h4> {pokemon && pokemon.types.map((type, idx) =>{
                            return(

                                <h4 key={idx} className={style.pokemonTypeText}>  {type.type.name}
                                </h4>
                            )
                        })}
    
                    </div>

                    <span onClick={clickHeart} className={style.pokemonFavorite}>
                        {heart}
                    </span> 
                </div>
            </div>
        </div>
           
    )
}

export default Pokemon
