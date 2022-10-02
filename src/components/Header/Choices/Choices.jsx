import style from './Choices.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHoliday } from '../../../store/holidaysSlice';
import { fetchHolidays } from '../../../store/holidaysSlice';

const Choices = () => {
    const [isOpenChoises, setIsOpenChoices] = useState(false);
    const { holiday, holidays } = useSelector(state => state.holidays);

    const dispatch = useDispatch();

    const toggeChoises = () => {
        setIsOpenChoices(!isOpenChoises);
    };

    useEffect(() => {
        dispatch(fetchHolidays());

    }, [dispatch]);

return (
    <div className={style.wrapper}>
        <button className={style.button} onClick={toggeChoises}>
            {holidays[holiday] || 'Выбрать праздник'}
            </button>
    {isOpenChoises && (
        <ul className={style.list}>
        {Object.entries(holidays).map(item => (
            <li 
            className={style.item} 
            key={item[0]}
            onClick={() => {
                dispatch(setHoliday(item[0]));
                toggeChoises();
                }
            }
            >{item[1]}
            </li>
        ))}
        </ul>
    )
    }
    </div>
    );
}

export default Choices;

