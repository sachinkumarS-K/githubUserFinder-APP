import { useEffect, useState } from "react";
import axios from "axios";
export function useGetDetail(name , id) {
    const [details, setDetail] = useState({
        url: `https://api.github.com/users/${id}`,
        data: {},
        loading : false
    });

    async function fetchData() {
        setDetail((pre) => ({ ...pre, loading: true }));
        let response;
        if (name) {
            response = await axios.get(`https://api.github.com/users/${name}`);
        }
        else {
            response = await axios.get(details.url);
        }
        console.log(response.data)
        const info = {
            name: response.data.login,
            userName: response.data.name ,
            link: response.data.html_url,
            image: response.data.avatar_url,
            bio: response.data.bio,
            following: response.data.following,
            followers: response.data.followers
        }
        setDetail((pre) => ({...pre , data : info}))
        //console.log(info);
        setDetail((pre) => ({ ...pre, loading: false }));
  }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        details
    }
}