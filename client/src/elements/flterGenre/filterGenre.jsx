import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenre } from "../../actions";




export function FilterGenre(){

const dispatch = useDispatch()

const allGenre = useSelector(state => state.genre)

function handleFilter(e){
    e.preventDefault()
    dispatch(filterGenre(e.target.value))
}

    return(
        <div>
            <select onChange={e=>{handleFilter(e)}} defaultValue="DEFAULT">
                <option value="DEFAULT" disabled>Filtrar por genero</option>
                <option value ="All">Todos los generos</option>
                {
                    allGenre?.map(e=>{
                        return <option value={e.name} key={e.id} >{e.name}</option>
                    })
                }

            </select>
        </div>
    )
}