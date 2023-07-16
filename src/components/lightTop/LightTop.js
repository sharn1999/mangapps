import {useState, useEffect} from 'react';
import '../allTop/allTop.sass';
import {Link} from 'react-router-dom';
import useMangaService from '../../services/MangaService';

const LightTop = () => {
    const [charList, setCharList] = useState([]);
    const {getLight} = useMangaService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getLight()
            .then(setCharList);
    };

    function renderItems(arr) {
        const items =  arr.map((item) => {
            if(item.name.length > 63){
                item.name = item.name.substr(0, 63) + '...';
            } 
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
            <div className="manga__list-title">Топ 50 Лайт новелл по рейтингу</div>
            <hr />
            {items}
        </div>
    )
}

export default LightTop;