import filters from './filters.json';
import styles from './Filter.module.scss';
import classNames  from 'classnames';

type IOoption = typeof filters[0];

interface Props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ filter, setFilter }: Props){
    
    function selectFilters(option : IOoption){
        if(filter === option.id) return setFilter(null);
        return setFilter(option.id);
    }

    return(
        <div className={styles.filtros}>
            {filters.map(option => (
                <button className={classNames({
                    [styles.filtros__filtro]: true,
                    [styles['filtros__filtro--ativo']]: filter === option.id
                })} key={option.id} onClick={() => selectFilters(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    )

}