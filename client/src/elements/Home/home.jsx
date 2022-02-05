import React, { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGame, getGenre } from "../../actions";
import { Card } from "../Card/Card";
import { FilterGame } from "../filterGame/filterGame";
import { FilterGenre } from "../flterGenre/filterGenre";
import NavBar from "../NavBar/NavBar";
import { OrderRating } from "../OrdeRating/OrdeRating";
import { OrderAlfabetico } from "../OrderByAz/OrderByAz";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
    const dispatch = useDispatch()
    const allGame = useSelector((state) => state.videogame)

    const [orden, setOrden] = useState(``);
    const [name, setName] = useState('')

    const [currentPage, setCurrentPage] = useState(1);
    const [gamePerPage, setgamePerPage] = useState(15);
    const indexLastgame = currentPage * gamePerPage;
    const indexFirstgame = indexLastgame - gamePerPage;
    const currentgames = allGame.slice(indexFirstgame, indexLastgame);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        dispatch(getGame());
        dispatch(getGenre())
    }, [dispatch])

    return (
        <div>

            <div>
                <NavBar />
            </div>

            <div>
                <SearchBar name={name} setName={setName} />
            </div>

            <div>
                <FilterGenre />
            </div>

            <div>
                <FilterGame />
            </div>

            <div>
                <OrderAlfabetico setCurrentPage={setCurrentPage} setOrden={setOrden} />
            </div>

            <div>
                <OrderRating setCurrentPage={setCurrentPage} setOrden={setOrden} />
            </div>

            <div>
                <Paginado gamePerPage={gamePerPage} allGame={allGame.length} paginado={paginado} />

            </div>

            <div>
                {
                    currentgames?.map(e => {
                        return (
                            <div key={e.id}>
                                <Card
                                    id={e.id}
                                    name={e.name}
                                    image={e.image}
                                    genres={e.genres}
                                    rating={e.rating}
                                />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}