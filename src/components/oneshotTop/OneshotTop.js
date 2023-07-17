import {useState, useEffect} from 'react';
import '../allTop/allTop.sass';
import {Link} from 'react-router-dom';
import useMangaService from '../../services/MangaService';

const OneshotTop = () => {
    const [charList, setCharList] = useState([]);
    const {getOneshot, loading} = useMangaService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getOneshot()
            .then(setCharList);
    };

    function renderItems(arr) {
        const items =  arr.map((item) => {
            return (
                <li className="manga__item" key={item.id}>
                    <div className="manga__item-rank">Rank:<br/><span>{item.rank}</span></div>
                    <Link to={`/${item.id}`}>
                        <img src={item.thumbnail} alt={item.name} className="manga__item-img"/>
                        <div className="manga__item-name">{item.name}</div>
                        <div className="manga__item-subtitle">{item.type} <br/> {item.aired} <br /> {item.members} members </div>
                    </Link>
                    <div className="manga__item-score">Score:<br/><span>{item.score}</span></div>
                    <hr />
                </li>
            )
        });

        return (
            <ul className="manga__grid">
                {items}
            </ul>
        )
    }
    const items = renderItems(charList);

    return (
        <div className="manga__list">
            <div className="manga__list-title">Топ 50 Ваншотов по рейтингу</div>
            <hr />
            {!loading ? items : <div>Загрузка</div>}
        </div>
    )
}

export default OneshotTop;