import React from "react";
import { useDispatch } from "react-redux";
import { orderRating } from "../../actions";

export function OrderRating({setCurrentPage,setOrden}){

    const dispatch = useDispatch()

    function handleOrderRating(e){
        e.preventDefault()
        dispatch(orderRating(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`);
    }

    return(
        <div>
            <select onChange={e=>{handleOrderRating(e)}} defaultValue="DEFAULT" >
                <option value="DEFAULT" disabled>Oredenar por rating</option>
                <option value="mejor">Mejor Rating</option>
                <option value="peor">Peor Rating</option>
            </select>
        </div>
    )
}