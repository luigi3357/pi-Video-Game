require("dotenv").config();
const { Router } = require('express');
const { getGames, getAllGamesPage, getDbGenres, getGenre, getPlatform, getId } = require('../Utils/Utils');
const { Videogame, Genres, Platform} = require('../db.js');
const axios = require('axios')
const { API_KEY } = process.env;


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res, next)=>{
    const { name } = req.query;
    const gameTotal = await getAllGamesPage();
    try {          
            if(name){
               const filtro = gameTotal.filter(el => el.name.toLowerCase().includes(name.toLocaleLowerCase())).slice(0,15);
               
                filtro.length? res.status(200).json(filtro):res.status(404).send("No se encuentra el juego") 
            } else{
                res.status(200).json(gameTotal)
            }
    } catch (error) {
        next(error)
    }
        
  
});


router.get('/videogames/:id', async (req, res) => {
   
        const id = req.params.id;       
       if (id && !id.includes("-")) {
        const gameapi = await getId(id)
        if(gameapi.data.id){
            const infoId = {
                    id: gameapi.data.id,
                    name: gameapi.data.name,
                    rating: gameapi.data.rating,
                    image: gameapi.data.background_image,
                    image_adtional: gameapi.data.background_image_aditional,
                    description: gameapi.data.description,
                    platforms: gameapi.data.platforms.map(el=> el.platform.name),
                    genres: gameapi.data.genres.map(e=> e.name).toString(),
                }         
           
            return res.status(200).send(infoId)     
        }          
    }else{
        const allGames = await getAllGamesPage(id)
        console.log(allGames.data)
       return res.status(200).json(allGames)
    }  
    
})

router.get('/genres', async (req, res) => {
    try {
        let genreTotal = await getGenre();
        const mapGenre = await genreTotal.map(el => el.name)   
        console.log(mapGenre) 
        const onEach = mapGenre.forEach(element => {
            Genres.findOrCreate({
                where: { name: element }
            })
        });
        const allGenres = await Genres.findAll()
        res.status(200).json(allGenres)
    } catch (e) {
        res.status(404).send(e)
    }
   
})

router.get('/platforms', async (req, res) => {
    try {
        let platformTotal = await getPlatform();
        const mapPlatformsss = await platformTotal.map(el => el.name)   
        console.log(mapPlatformsss,"4")
        const onEach = mapPlatformsss.forEach(element => {
            Platform.findOrCreate({
                where: { name: element }
            })
        });
        const allPlatforms = await Platform.findAll()
        res.status(200).json(allPlatforms)
    } catch (e) {
        res.status(404).send(e)
    }  
})

router.post("/videogame", async (req, res) => {
    const {
        name, 
        description, 
        released, 
        rating, 
        genres, 
        platforms,
        createdInDb
    } = req.body

    try {
        const gameCreate = await Videogame.create({
            name, 
            description, 
            released, 
            rating, 
            platforms,
            createdInDb
        })
        const genreDb = await Genres.findAll({
            where:{ name: genres,
            }
        })
        gameCreate.addGenres(genreDb)
        res.status(200).send("Creado con Exito")
    } catch (error) {
        res.status(404).json(error)
    }
})

router.delete('/videogame/:id', async (req, res)=>{  
        const id = req.params.id;
        try{
            if(id){
                const allGame = await Videogame.destroy({
                    where: { id: id}
                })
                res.send("eliminado")
            }     
        }catch(e){
            res.status(404).json(e)
        }  
    })
 


module.exports = router;


