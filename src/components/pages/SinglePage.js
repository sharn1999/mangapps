import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../random/random.sass';
import useMangaService from '../../services/MangaService';
import ErrorBoundery from '../errorBoundary/ErrorBoundary';


const SinglePage = () => {
    const {mangaId} = useParams();
    const [char, setChar] = useState([]);
    const {getOneManga, loading} = useMangaService();

    useEffect(() => {
        onRequest();
    }, [mangaId]);

    const onRequest = () => {
        getOneManga(mangaId)
            .then(setChar);
    };
    return (
        <div className="manga__list random__list">
            {!loading ? <ErrorBoundery><View arr = {char}></View></ErrorBoundery> : <div>Загрузка</div>}
        </div>
    )
};

const View = ({arr}) => {
    var genres = '', serialization = '', authors = '', fav = '', members = '', synopsis = '', popularity = '', ranked = '', type ='', chapters = '', volumes='', status='', published='', score='', title='';
    if(arr.information.genres !== undefined){
        for(const item of arr.information.genres){
            genres = genres + ' ' + item.name;
        }
    }
    if(arr.information.serialization !== undefined){
        for(const item of arr.information.serialization){
            serialization = serialization + ' ' + item.name;
        }
    }
    if(arr.information.authors !== undefined){
        for(const item of arr.information.authors){
            authors = authors + ' ' + item.name;
        }
    }
    fav = arr.statistics.favorites;
    members = arr.statistics.members;
    popularity = arr.statistics.popularity;
    synopsis = arr.synopsis;
    ranked = arr.statistics.ranked;
    type = arr.information.type[0].name;
    chapters = arr.information.chapters;
    volumes = arr.information.volumes;
    status = arr.information.status;
    published = arr.information.published;
    score = arr.statistics.score;
    title = arr.title_ov;

    return (
        <ul className="manga__grid">
            <div className="manga__list-title random__list-title">{title}</div>
            <hr />
            <div className="random__wrapper">
                <div className="random__wrapper-img">
                <img src={arr.picture_url} alt="" />
                </div>
                <div className="random__descr">
                    Описание: <br/>
                    {synopsis} <br /><br />
                    Статистика <br />
                    Любимое у {fav} человек <br />
                    Прочитало {members} человек <br />
                    Место по популярности №{popularity} <br />
                    Место по оценкам №{ranked} <br />
                    Общая оценка {score} <br />
                </div>
            </div>
            <div className="random__information">
                <span>Тип: {type}</span>
                <span>Количество глав: {chapters}</span>
                <span>Количество томов: {volumes}</span>
                <span>Статус: {status}</span>
                <span>Выходит с {published}</span>
                <span>Жанры: {genres}</span>
                <span>Выходило в {serialization}</span>
                <span>Авторы: {authors}</span>
            </div>
        </ul>
    )
}

export default SinglePage;
