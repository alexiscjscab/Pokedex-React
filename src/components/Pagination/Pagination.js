import React from 'react';
import style from './Pagination.module.css';
import {IoArrowForwardSharp} from 'react-icons/io5'
import {IoArrowBackSharp} from 'react-icons/io5'

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;

    
    return (
        <div className={style.pagination}>
        
             
            <h3 
                onClick={onLeftClick}
                className={style.left}
            >
                <IoArrowBackSharp className={style.icon}/>
            </h3>
            
        
            <h3>{page} de {totalPages}</h3>
            
            
            <h3 
                onClick={onRightClick}
                className={style.right}
            >
                        <IoArrowForwardSharp className={style.icon}/>
            </h3>
            
            
        </div>
    )
}

export default Pagination
