import { useHttp } from "../hooks/http.hook";

const useMangaService = () => {
    const {loading, request} = useHttp();

    const url = 'https://myanimelist.p.rapidapi.com/manga'



    const getAllManga = async () => {
        const res = await request(`${url}/top/all`);
        return res.map(_transformAllManga);
    };

    const getManga = async () => {
        const res = await request(`${url}/top/manga`);
        return res.map(_transformAllManga);
    };

    const getOneshot = async () => {
        const res = await request(`${url}/top/oneshots`);
        return res.map(_transformAllManga);
    };

    const getDoujinshi = async () => {
        const res = await request(`${url}/top/doujin`);
        return res.map(_transformAllManga);
    };

    const getLight = async () => {
        const res = await request(`${url}/top/lightnovels`);
        return res.map(_transformAllManga);
    };

    const getNovella = async () => {
        const res = await request(`${url}/top/novels`);
        return res.map(_transformAllManga);
    };

    const getManhwa = async () => {
        const res = await request(`${url}/top/manhwa`);
        return res.map(_transformAllManga);
    };

    const getManhua = async () => {
        const res = await request(`${url}/top/manhua`);
        return res.map(_transformAllManga);
    };

    const getFav = async () => {
        const res = await request(`${url}/top/favorite`);
        return res.map(_transformAllManga);
    };

    const getPopularManga = async () => {
        const res = await request(`${url}/top/bypopularity`);
        return res.map(_transformAllManga);
    };


    const getOneManga = async (id) => {
        const res = await request(`${url}/${id}`);
        return res;
    };

    const getMangaByName = async (name) => {
        const res = await request(`${url}/search/${name}`);
        return res;
    };

    const _transformAllManga = (char) => {
        return {
            id: char.myanimelist_id,
            name: char.title,
            thumbnail: char.picture_url,
            homepage: char.myanimelist_url,
            score: char.score,
            rank: char.rank,
            type: char.type,
            aired: char.aired_on,
            members: char.members
        }
    };
    // const _transformOneManga = (char) => {
    //     return {
    //         name: char.title_ov,
    //         thumbnail: char.picture_url,
    //         desr: char.synopsis,
    //         genres: char.information.genres,
    //         themes: char.information.theme,
    //         demo: char.information.demographic,
    //         serialization: char.information.serialization,
    //         autors: char.information.autors,
    //         statistic: char.statistics,
    //         characters: char.characters
    //     }
    // };
    return {getAllManga, getManga, getPopularManga, getOneshot, getDoujinshi, getLight, getNovella, getManhwa, getManhua, getFav, getOneManga, loading, getMangaByName};
}

export default useMangaService;