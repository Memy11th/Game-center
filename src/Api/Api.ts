const API_KEY = process.env.API_KEY ; 
const API_URL = 'https://api.rawg.io/api/'

const fetchFn = (url:string,cache?:number)=> fetch(url,{next:{revalidate:cache || 3600 }}).then((Response)=>Response.json())
export const searchGameFn = async function (
    query?:string,
    page:number,
    page_size:number = 20,
    filters?:{filterName:string,option:string}[]
){
    
}