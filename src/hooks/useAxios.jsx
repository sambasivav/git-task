import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/graphql';

const useAxios = () => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        try {
            const result = await axios.request({
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`
                },
                ...params
            });
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, fetchData };
};

export default useAxios;