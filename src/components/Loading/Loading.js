import React from 'react';
import style from './Loading.module.css';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className={style.loading}>
            <h1>Cargando</h1>
            <div className={style.load}>
                <ReactLoading type={'spin'} color={'#000'} height={100} width={100} />
            </div>
        </div>
    )
}



export default Loading
