import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getId } from "../../actions";


export const Detail = (props) => {
    const dispatch = useDispatch();
    const params = useParams().id;


    useEffect(() => {
        dispatch(getId(params))
    }, [dispatch])

    const allId = useSelector(state => state.paramsd)
    console.log(allId)


    return (
        <div>      
                   
                        <b>{allId.name}</b><br/>
                        <img src={allId.image} alt="not found" width="250px" heigth="300px" />
                        <p>{allId.rating}</p>
                        <p>{allId.platforms}</p>
                        <p>{allId.genres}</p>
                        <p>{allId.description}</p>

                    
            
        </div>
    )
}


// export default function Detail(props) {

//     const dispatch = useDispatch()

//     const { id } = useParams()

