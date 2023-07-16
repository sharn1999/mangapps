import {useState, useEffect} from 'react';
import useMangaService from '../../services/MangaService';
import {Link} from 'react-router-dom';
import './popularTop.sass';

const PopularTop = () => {
    const [PopList, setPopList] = useState([]);
    const {getPopularManga} = useMangaService();

    useEffect(() => {
        getPopularManga()
            .then(setPopList);
    }, []);


    function renderItems(arr) {
        const items =  arr.map((item,i) => {
            if (i<10){
                return (
                    <li className="mangaPop__item manga__item" key={item.id}>
                        <Link to={`/${item.id}`}>
                            <img src={item.thumbnail} alt={item.name} className="mangaPop__item-img manga__item-img"/>
                            <div className="mangaPop__item-name manga__item-name">{item.name}</div>
                            <div className="mangaPop__item-subtitle manga__item-subtitle">{item.members} members </div>
                        </Link>
                        <hr />
                    </li>
                )
            } else{
                return;
            }

        });

        return (
            <ul className="mangaPop__grid manga__grid">
                {items}
            </ul>
        )
    }
    const items = renderItems(PopList);

    return (
        <div className="mangaPop__list manga__list">
            <div className="mangaPop__list-title manga__list-title">Популярная Манга</div>
            <hr />
            {items}
        </div>
    )
}

export default PopularTop;