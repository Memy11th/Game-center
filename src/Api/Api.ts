const API_KEY = process.env.API_KEY ; 
const API_URL = 'https://api.rawg.io/api/'

// A dynamic arch. to the fetch part to be dynamic
const fetchFn = (url:string,cache?:number)=> fetch(url,{next:{revalidate:cache || 3600 }}).then((Response)=>Response.json());

// a function to get games based on your search
export const searchGameFn = async function (
    page:number,
    page_size:number = 20,
    query?:string,
    cache?:number,
    filters?:{filterName:string,option:string}[]
){
    const data = await fetchFn(`${API_URL}games?query=${query}&page_size=${page_size}&page=${page}&${filters?.map((filter)=>`${filter.filterName}=${filter.option}`).join('&')}&key=${API_KEY}`,
    cache );
    console.log(data)
    return data;
    
}

// a function to get a certain game Details , screenshots & similar games .. the function's Archeticture made to both SSC and CSC
export const getGame = async function (id:string){
    try{
        const data = await fetchFn(`${API_URL}games/${id}?key=${API_KEY}`);
        const screenshots =await fetchFn(`${API_URL}games/${id}/screenshots?key=${API_KEY}`);
        const {results} =await fetchFn(`${API_URL}games/${id}/game-series?key=${API_KEY}`)
        return {data,screenshots,results}
    }catch(err){
        throw err
    } 
}

// a function to get all the genres with their id and name
export const allGenre = async function () {
        const Genres = await fetchFn(`${API_URL}genres?key=${API_KEY}`);
        const { results}:{results:[]} = Genres;
        const GenreArray = results?.map(({name,id}:{name:string,id:number})=>({name,id}));
        return GenreArray
        
    };

    export const gameByGenre = async function ({genreID}:{genreID:number}){
        const data = await fetchFn(`${API_URL}games?genres=${genreID}&page_size=15&key=${API_KEY}`)
        return data?.results

    }

    export const gamebyplatforms = async function (id: string, page = 1, page_size = 20) {
        const data = await fetchFn(`${API_URL}games?platforms=${id}&page_size=${page_size || 40}&page=${page}&key=${API_KEY}`);
        return data;
    };

    export const getGamesByIds = async function (ids: string[]) {
        const data = await Promise.all(ids.map((id) => getGame(id)));
        return data;
    };



