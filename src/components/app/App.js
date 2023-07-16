import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useTheme} from '../../hooks/useTheme'

import Header from '../header/Header';
import AllPage from '../pages/AllPage';
import OneshotPage from '../pages/OneshotPage';
import DoujinshiPage from '../pages/DoujinshiPage';
import LightPage from '../pages/LightPage';
import MangaPage from '../pages/MangaPage';
import NovellaPage from '../pages/NovellaPage';
import ManhwaPage from '../pages/ManhwaPage';
import ManhuaPage from '../pages/ManhuaPage';
import FavPage from '../pages/FavPage';
import RandomPage from '../pages/RandomPage';
import SinglePage from '../pages/SinglePage';


const App = () => {
  const {theme, setTheme} = useTheme();
  return (
    <Router>
      <Header setTheme={setTheme} theme={theme}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllPage/>} />
          <Route path="/oneshots" element={<OneshotPage/>} />
          <Route path="/doujinshi" element={<DoujinshiPage/>} />
          <Route path="/lightnovel" element={<LightPage/>} />
          <Route path="/manga" element={<MangaPage/>} />
          <Route path="/novella" element={<NovellaPage/>} />
          <Route path="/manhwa" element={<ManhwaPage/>} />
          <Route path="/manhua" element={<ManhuaPage/>} />
          <Route path="/favorite" element={<FavPage/>} />
          <Route path="/random" element={<RandomPage/>} />
          <Route path="/:mangaId" element={<SinglePage/>} />
        </Routes>
      </div>
    </Router>


  )
}

export default App;
