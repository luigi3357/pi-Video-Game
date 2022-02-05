import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getGame } from "../../actions";

export default function NavBar(){
const dispatch = useDispatch()

function handleClick (e){
    e.preventDefault()
    dispatch(getGame())
}

    return(
        <div>
            <Link to="/videogame">
                <button>crear</button>
            </Link>

            <Link to="/">
            <button>Volver</button>            
            </Link>

            <button onClick={e => { handleClick(e) }}>Recargar</button>

        </div>
    )
}