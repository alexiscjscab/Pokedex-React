import React, {useState} from 'react';
import style from './SearchBar.module.css';

const SearchBar = (props) => {

    const {onSearch} = props
    const [search, setSearch] = useState('');


    const onChange = (e) => {
        setSearch(e.target.value.toLowerCase());
        if(e.target.value.length === 0){
            onSearch(null)
        }
    }

    const onClick = async (e) => {
        onSearch(search)
    }

    
    return (
        <div className={style.SearchContainer}>
            <div className={style.SearchBar}>
                <input 
                  placeholder='ID / NOMBRE'
                  onChange={onChange}   
                />
            </div>
            <div className={style.SearchBarBtn}>
                <button onClick={onClick}>Buscar</button>
            </div>
            
        </div>
    )
}

export default SearchBar