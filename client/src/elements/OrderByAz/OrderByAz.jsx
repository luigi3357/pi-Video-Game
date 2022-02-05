import React from "react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderName } from "../../actions";

export function OrderAlfabetico({setCurrentPage, setOrden}){

const dispatch = useDispatch()



function handleOrder(e){
    e.preventDefault()
    dispatch(orderName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
    setCurrentPage(1)
}

    return(
        <div>
            <select onChange={e=>{handleOrder(e)}} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Ordenar Alfabeticamente</option>
                <option value='asc'>A/Z</option>
                <option value='desc'>Z/A</option>
            </select>
        </div>
    )
}