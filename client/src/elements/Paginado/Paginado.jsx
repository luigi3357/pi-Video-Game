import React from "react";

export default function Paginado({gamePerPage, allGame, paginado}){
    const pageNumber = []

    for (let i = 0; i <= Math.ceil(allGame/gamePerPage); i++) {
        pageNumber.push(i+1);               
    }
    pageNumber.pop() 
    return (
        <nav>
            <ul key="alt">
                {
                    pageNumber && pageNumber.map(n =>(
                        <li key={n}>
                        <button onClick={()=> paginado(n)}>{n}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}



                   
    
     
    