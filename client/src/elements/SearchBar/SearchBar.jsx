 import React from "react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../../actions";


 
 export default function SearchBar({name, setName}){

    const dispatch = useDispatch();
    

 function handleInputChange (e){
     e.preventDefault();
     setName(e.target.value)
 }

 function handleSubmit(e){
     e.preventDefault();
     dispatch(getSearch(name));
     setName('')
 }

    return(
        <div>
            <div>
                <form onSubmit={ e=>{handleSubmit(e)} } >
                <input value={name} type="text" key="unique" placeholder="Buscar" onChange={e=>{handleInputChange(e)}} /> <button type="Submit">Enviar</button>
            </form>
            </div>
        </div>
    )
 }