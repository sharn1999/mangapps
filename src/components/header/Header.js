import { useState} from 'react';
import {Link} from 'react-router-dom';

import './header.sass';
import moon from '../../resources/img/moon.svg';
import book from '../../resources/img/book.svg';
import searchImg from '../../resources/img/search.svg';
import message from '../../resources/img/message.svg';
import useMangaService from '../../services/MangaService';
import question from '../../resources/img/question.svg';
const Header = (props) => {
    const [drop, setDrop] = useState(false);
    const [search, setSearch] = useState(false);


    const showDropContent = drop ? <DropContent></DropContent> : null;
    const showSearch = search ? <SearchContent search = {setSearch}></SearchContent> : null
    return (
        <header>
            <div className="container">
                <Link to='/' className='logo'>MangApp</Link>

                <nav className="header-menu">
                    <div className="header-menu__item" onClick={() => setDrop(!drop)}>
                        <img src={book} alt="#" />
                        Каталог
                        {showDropContent}
                    </div>
                    <div className="header-menu__item" onClick={() => setSearch(!search)}>
                        <img src={searchImg} alt="#" />
                        Поиск
                    </div>
                    {showSearch}
                    <div className="header-menu__item">
                        <img src={message} alt="#" />
                        Форум
                    </div>
                    <div className="header-menu__item">
                        <img src={question} alt="#" />
                        FAQ
                    </div>
                </nav>

                <div className="reg">   
                    <a href="">Вход</a>
                    <a href="">Регистрация</a>
                    <div className="reg__icon" onClick={() => props.setTheme(() => {
                        if(props.theme== 'dark'){
                            return 'light';
                        } else {
                            return 'dark';
                        }
                    })}>
                        <img src={moon} alt="moon" />
                    </div>
                </div>
            </div>
        </header>
    )
}

const DropContent = () => {
    return (
        <div className="header-menu__drop">
            <Link to='/manga'>Манги</Link>
            <Link to='/oneshots'>Ваншоты</Link>
            <Link to='/doujinshi'>Додзинси</Link>
            <Link to='/lightnovel'>Лайт новеллы</Link>
            <Link to='/novella'>Новеллы</Link>
            <Link to='/manhwa'>Манхвы</Link>
            <Link to='/manhua'>Маньхуа</Link>
            <Link to='/favorite'>Всеми любимые</Link>
            <hr />
            <Link to="/">Все</Link>
            <Link to='/random'>Случайный тайтл</Link>
        </div>
    )
}


const SearchContent = (props) => {
    const [manga, setManga] = useState(null);
    const [term, setTerm] = useState('');
    const {getMangaByName} = useMangaService();

    const onMangaLoaded = (char) => {
        setManga(char);
    }

    const updateManga = (name) => {
        getMangaByName(name)
            .then(onMangaLoaded);
        console.log(manga)
    }

    const onUpdateSearch = (e) => {

        const term = e.target.value;
        setTerm(term);
    }

    const content = manga ? <Link className='header-menu__link' to={`/${manga[0].myanimelist_id}`} onClick={() => {props.search(false)}}><img src={manga[0].picture_url}/></Link> : null;
    return (
        <>
            <div className="overlay" onClick={() => {props.search(false)}}></div>
            <div className="header-menu__search">
                <input type="text" onChange={onUpdateSearch} value={term}/>
                <button type='submit' onClick={() => {updateManga(term)} }><img src={searchImg}/></button>
            </div>
            {content}
        </>

    )
}

export default Header;