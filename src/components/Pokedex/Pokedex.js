import React from 'react'
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import Pokemon from '../Pokemon/Pokemon';
import style from './Pokedex.module.css';


const Pokedex = (props) => {

    const {pokemons, page, setPage, total, loading} = props;

    const lastPage = () => {
        const nextPage = Math.max(page -1, 0)
        setPage(nextPage);
    }
    const nextPage = () =>{
        const nextPage = Math.min(page +1, total - 1);
        setPage(nextPage)

    }



    return (
        <div className={style.PokedexContainer}>
            
            <div className={style.header}>
                <h1>Pokedex</h1>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            {
                loading ? <Loading/> :
                
                <div className={style.PokedexGrid}>
                    {pokemons.map((pokemon ,idx)=>{
                        return(
                            <Pokemon pokemon={pokemon} key={pokemon.name}/>
                        )
                    })} 

                </div>
            }
            <div className={style.paginBottom}>
            {!loading && pokemons.length > 1 &&
            <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            }
            </div>
        </div>
    )


}

export default Pokedex
