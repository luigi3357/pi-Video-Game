import { FILTER_CREATED, FILTER_GENRE, GET_GAME, GET_GENRE, GET_ID, GET_SEARCH, ORDER_NAME, ORDER_RATING } from "../actions types/actionTypes"

const initialState = {
   videogame : [],
   auxGame:[],
   genre: [],
   paramsd: []
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GAME:
          console.log(action.payload)
            return {
                ...state,
                videogame: action.payload,
                auxGame: action.payload
            };
            case GET_GENRE:
                return{
                    ...state,
                    genre: action.payload
                }
            case FILTER_CREATED:
                const filterCreated = state.auxGame
                const filter = action.payload === 'created'?
                 filterCreated.filter(e=> e.createdInDb): 
                 filterCreated.filter(e=> !e.createdInDb)
              return{
                  ...state,
                  videogame: action.payload ==='All'? filterCreated: filter
              };
              
              case FILTER_GENRE:
                  const allGame= state.auxGame
                  const filter1 = action.payload === 'All'? allGame: allGame.filter(e=>{
                      if(typeof e.genres ==="string")return e.genres.includes(action.payload)
                      if(Array.isArray(e.genres)){
                          const mapGenre = e.genres.map(e=> e.genres)
                          return mapGenre.includes(action.payload)
                      }    
                      return true                 
                  })
                   return{
                    ...state,
                    videogame: filter1
                }
                case GET_ID:
                    return {
                        ...state,
                        paramsd: action.payload
                    }
              case ORDER_NAME:
                const orderName = state.auxGame
                     const orderNameEnd = action.payload === 'asc'?  orderName.sort((a,b)=>{
                        if (a.name > b.name) return 1;
                        if (a.name < b.name) return -1;
                        return 0;                 
                  }):  orderName.sort((a,b)=>{
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                  })
                  console.log(orderNameEnd)
                  return{
                      ...state,
                      videogame: action.payload === 'n'? orderName: orderNameEnd
                  };
                 
                  case ORDER_RATING:                   
                    const orderRatingEnd = action.payload === 'peor'? state.auxGame.sort((a,b)=>{
                        if(a.rating>b.rating)return 1
                        if (a.rating<b.rating)return -1
                        return 0                      
                    }): state.auxGame.sort((a,b)=>{
                        if(b.rating>a.rating)return 1
                        if(b.rating<a.rating)return -1
                        return 0
                    })
                  return{
                      ...state,
                      videogame: orderRatingEnd
                  }

                  case GET_SEARCH:
                      return{
                          ...state,
                          videogame: action.payload
                      }
        default:
            return state
    }
}


export default rootReducer