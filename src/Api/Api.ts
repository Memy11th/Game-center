const API_KEY = process.env.API_KEY ; 
const API_URL = 'https://api.rawg.io/api/'

const fetchFn = (url:string,cache?:number)=> fetch(url,{next:{revalidate:cache || 3600 }}).then((Response)=>Response.json())
export const searchGameFn = async function (
    query?:string,
    page:number,
    page_size:number = 20,
    cache?:number,
    filters?:{filterName:string,option:string}[]
){
    const data = await fetchFn(`${API_URL}games?query=${query}&page_size=${page_size}&page=${page}&${filters?.map((filter)=>`${filter.filterName}=${filter.option}&`).join('')}&key=${API_KEY}`,
    cache );
    console.log(data)
    return data;
    
}