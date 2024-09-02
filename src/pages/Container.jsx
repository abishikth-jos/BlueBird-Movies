<<<<<<< HEAD
import React from "react";
=======
import React,{useEffect, useContext} from "react";
import Contextpage from '../Contextpage'
>>>>>>> 591923c1ba61242c492c6786b8fa32de748e022d
import Movies from "../components/Movies";
import Searchbar from "../components/Searchbar";
import { useParams } from 'react-router-dom'
import Search from "../pages/Search"


function Container() {
    const { setMovies } = useContext(Contextpage);
    const { query } = useParams()
    return (
        <section>
        <Searchbar />
        {query ? <Search query={query} /> : <Movies />}
        </section>
    )
}

export default Container;