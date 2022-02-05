import React from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getGame } from "../../actions";
import Home from "../Home/home";


export function LandingPage(){
    
const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getGame())
    },[dispatch,<Home/>])

    return(
        <div>
            <h1>Bienvenidos</h1>
            <Link to="/home">
            <button>comencemos</button>            
            </Link>
            <p>En esta web encontraran una libreria de juegos en la cual podran agregar nuevos, buscar, ordenarlos, filtrarlos por generos, creados o de internet y borrar los que sean creados por uno </p>
            {/* <video src="" alt="Not Found" /> */}           
        </div>
        
    )
}
