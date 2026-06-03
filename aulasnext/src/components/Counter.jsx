'use client';

import {useState} from 'react';
// import styles from './Counter.module.css';

export default function Counter(){
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count + 1);
    }

    const [inputValue, setInputValue] = useState('');

    function handleChange(event){
        setInputValue(event.target.value);
    }

    return(
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={handleIncrement}>Clique Aqui</button>
            <br/><br/><br/>
            <label>Digite seu nome: </label>
            <input 
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
            <p>Texto digitado: {inputValue}</p>
        </div>
    )
}