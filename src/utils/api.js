import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2ZhNWZmZDA2OGE3MGFjZDI3NWM4ZDNiOWFjMmYyNiIsInN1YiI6IjY0ZGY4MmExYTNiNWU2MDBjNWJkMzU3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqeL7exnXtQgQHD9_joHe7OXavDLrGrAHlMBTMslnu8";
const headers = {
    Authorization : "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi= async(url, params) =>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers, params,
        });
        return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}