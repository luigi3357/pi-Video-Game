import React from "react";
import { Link } from "react-router-dom";

export function Card({image, name, genres, rating,id}){
    return(
        <div>
            <Link to={"/home/"+id}>            
            <b>{name}</b>
            <p>Generos: {genres}</p>
            <p>Rating: {rating}</p>
            <img src={image} alt="Not Found" width="250px" height="250"/>
            </Link>
        </div>
    )
}