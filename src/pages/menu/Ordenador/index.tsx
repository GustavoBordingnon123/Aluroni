import styles from './Ordenador.module.scss';
import options from './options.json'
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props { 
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador,setOrdenador}: Props){
    const [open, setOpen] = useState(false);
    const nameOrdenador = ordenador && options.find(option => option.value === ordenador)?.nome;
    return(
        <button 
            className={classNames({
                [styles.ordenador]: true,
                [styles["ordenador--ativo"]]: ordenador !== ""
            })}
            onClick ={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
             <span>{nameOrdenador || "Ordenar Por"}</span>
             {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
             <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: open
             })}>
                {options.map(option => (
                    <div className={styles.ordenador__option} key={option.value} onClick={() => setOrdenador(option.value)}>
                        {option.nome}
                    </div>
                ))};
             </div>

        </button>
    )
}