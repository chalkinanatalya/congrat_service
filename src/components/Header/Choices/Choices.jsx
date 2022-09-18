import style from './Choices.module.css';
import { useContext, useEffect, useState } from 'react';
import { holidaysContext } from '../../../context/holidayContext';
import { URI_API } from '../../../const/const.js';

const Choices = () => {
    const [isOpenChoises, setIsOpenChoices] = useState(false);
    const {holiday, setHoliday} = useContext(holidaysContext);
    const [holidays, setHolidays] = useState({});

    useEffect(() => {
        fetch(URI_API)
            .then(response => {
                if(response.status !== 200) {
                    throw new Error (response.status)
                }
                return response.json()
            })
            .then(data => setHolidays(data))
            .catch(err => console.error(err));
    }, [setHolidays]);

    const toggeChoises = () => {
        setIsOpenChoices(!isOpenChoises);
    };
    const changeHoliday = (title) => {
        setHoliday(title);
        toggeChoises();
    }
return (
    <div className={style.wrapper}>
        <button className={style.button} onClick={toggeChoises}>{holiday}</button>
    {isOpenChoises && (
        <ul className={style.list}>
        {Object.entries(holidays).map(item => (
            <li 
            className={style.item} 
            key={item[0]}
            onClick={() => changeHoliday(item[1])}
            >{item[1]}</li>
        ))}
        </ul>
    )
    }
    </div>
    );
}

export default Choices;