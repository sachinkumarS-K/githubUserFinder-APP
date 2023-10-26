import axios from 'axios';
import { useEffect, useState } from 'react';

export function useProfileList() {
    
    const [profileList, setProfileList] = useState({
        data: [],
        loading: false,
        url: 'https://api.github.com/users'
    });

    async function fetchData() {
        setProfileList((pre) => ({ ...pre, loading: true }));
        try {
            const response = await axios.get(profileList.url);
            console.log(response.data);
            const info = response.data.map(user => {
                return {
                    name: user.login,
                    id: user.id,
                    image: user.avatar_url,
                    url: user.url
                }
            });
            //console.log(info.slice(10,20));
            setProfileList((pre) => ({ ...pre, data: info.slice(10,23) }));

        } catch (error) {
            console.log('Something went wrong' , error.message)
        }
        setProfileList((pre) => ({ ...pre, loading: false }));
    }

    useEffect(() => {
        fetchData();
    } , [])

    return {
        profileList ,
        setProfileList
    }
}