import axios from "axios"
import { FILTER_CREATED, FILTER_GENRE, GET_GAME, GET_GENRE, GET_SEARCH, ORDER_NAME, ORDER_RATING, GET_ID } from "../actions types/actionTypes";



export function getGame(payload){
    return async function(dispatch){
    let json = await axios.get(`http://localhost:3001/videogames`);
     return dispatch({
         type: GET_GAME,
         payload: json.data
     });
    };
};

export function getSearch(name){
return async function(dispatch){
    try {
         let json = await axios.get("http://localhost:3001/videogames?name="+name);
    return dispatch ({
        type: GET_SEARCH,
        payload: json.data
    })
    } catch (error) {
        console.log(error)
    }   
}
}

export function getId(id) {
    return async function (dispatch) {
      try {
        let json = await axios.get(`http://localhost:3001/videogames/` + id)
        return dispatch({
          type: GET_ID,
          payload: json.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

export function getGenre(payload){
    return async function(dispatch){
        try {
            let json = await axios.get("http://localhost:3001/genres")
            return dispatch({
                type: GET_GENRE,
                payload: json.data
            })
        } catch (error) {
            
        }
    }
}

export function filterCreated(payload){
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function filterGenre(payload){
    return{
        type: FILTER_GENRE,
        payload
    }
}

export function orderName(payload){
    return{
        type:ORDER_NAME,
        payload
    }
}

export function orderRating(payload){
    return{
        type: ORDER_RATING,
        payload
    }
}
     
        
   