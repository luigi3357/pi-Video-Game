import React from "react";
import { useDispatch } from "react-redux";
import { filterCreated } from "../../actions";


export function FilterGame(){

const dispatch = useDispatch();
    function handlefilter(e){
        dispatch(filterCreated(e.target.value))

    }

    return(
        <div>
            <select name="" id="" onChange={(e)=>{handlefilter(e)}}>
                <option value='All'>Creados/Internet</option>
                <option value='created'>Creados</option>
                <option value='api'>Internet</option>
            </select>
        </div>
    )
}
