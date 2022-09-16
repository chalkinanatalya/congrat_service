import style from './Choices.module.css';
import { useState } from 'react';

const holidays = {
newyear: 'Новый год',
birthdayWomen: 'День рождения  Ж',
bithdayMen: 'День рождения  М',
womenday: '8 марта',
knowledgeday: 'День знаний',
};

const Choices = () => {
    const [isOpenChoises, setIsOpenChoices] = useState(false);
    const [holiday, setHoliday] = useState('Выбрать праздник');

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