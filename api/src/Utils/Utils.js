require("dotenv").config();
const { Videogame, Genres, Platform } = require('../db.js');
const axios = require('axios')
const { Sequelize } = require('sequelize');
const { API_KEY } = process.env;
// &page_size=99999999999999999
async function getGames() {
    // const apiUrl = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`);
                     const promise1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`);
                 const promise2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`);
                 const promise3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`);
                 const promise4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`);
                 const promise5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`);

                
                 const apiresult = await promise1.data.results
                 .concat(promise2.data.results)
                 .concat(promise3.data.results)
                 .concat(promise4.data.results)
                 .concat(promise5.data.results)
                
    const apiInfo = await apiresult.map(e => {
            return {
            id: e.id,
            name: e.name,
            description: e.description,
            released: e.released,
            image: e.background_image,
            rating: e.rating,
            platforms: e.platforms.map(el=> el.platform.name),
            genres: e.genres.map(e=> e.name).toString(),
        };
    });

    return apiInfo
};

async function getId(id){
  return await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
}


async function getGenre() {
    let genreApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    let genreMap = genreApi.data.results.map(el => {
        return {
            name: el.name
        }
    })   
    
    return genreMap    
}

async function getPlatform(){
        let platformTotal = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
        const mapPlatforms = await platformTotal.data.results.map(el =>{
            return{
                name:el.name
            }
        } )
                console.log(mapPlatforms,"2")
        return mapPlatforms
}


async function getDbGenres() {
    return await Videogame.findAll({
        include: [{
                model: Genres,
                // model: Platforms,
                attributes: ['name'],
                through: {
                    attributes: [],
                } 
            },{
                model: Platform,
                // model: Platforms,
                attributes: ['name'],
                through: {
                    attributes: [],
                } 
            }]                  
    })
};




async function getAllGamesPage() {
    const apiInfo = await getGames();
    const dbInfo = await getDbGenres();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
};


module.exports = { getGames, getAllGamesPage, getDbGenres, getGenre,getPlatform,getId }