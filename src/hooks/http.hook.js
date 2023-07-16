import {useState, useCallback} from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);

    const request = useCallback(async(url, method = 'GET', body = null, headers = {'X-RapidAPI-Key': '08872c49bamsh504db3015db0d55p1438a7jsnf0c878267582', 'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'}) => {
        setLoading(true);
        try {
            const response = await fetch(url, {method, body, headers});
            const data = await response.json();
            setLoading(false)
            return data;
        } catch(e) {
            setLoading(false)
            throw e;
        }

    }, []);

    return {request, loading};
};
