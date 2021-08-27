import React, {useContext} from 'react';
import FavoriteContext from '../../contexts/favoriteContexts';
import style from './NavBar.module.css';

import {BsFillStarFill} from 'react-icons/bs';

const NavBar = () => {

    const {favoritePokemons} = useContext(FavoriteContext);



    const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';


    return (
        <nav className={style.nav}>
            <div></div>
            <div class={style.image}>
                <img src={imgUrl} alt='Pokedex' />
            </div>
            <div className={style.fav}><BsFillStarFill className={style.favIcon}/>  {favoritePokemons.length > 0 && <h4>{favoritePokemons.length}  </h4>} </div>
        </nav>
    )
}

export default NavBar
