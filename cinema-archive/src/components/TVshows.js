import React, {useState, useEffect} from 'react'
import {FaSistrix} from 'react-icons/fa'
import { ResultCard } from './ResultCard';

export const TVshows = () => {
    
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const [count, setCount] = useState(2)

    const fetchData = async (count) =>{
        let response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${count}&include_adult=false`)
        let data = await response.json();
        let refinedResults = filterNullPictures(data.results)
        setResults(results.concat(refinedResults))
    }

    const handleQueryChange = e => {
        setQuery(e.target.value)
    }

    const fetchSearchData = async (e) => {
        e.preventDefault();
        let response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
        let data = await response.json();
        let refinedResults = filterNullPictures(data.results)
        setResults(refinedResults)
    }
    

    const filterNullPictures = (results) => {
        const filteredList = results.filter(show => show.poster_path !== null)
        return filteredList
    }

    useEffect(() => {
        fetchData(2)
    }, [])

    const handleLoadMore = () => {
        setCount(count + 1);
        fetchData(count + 1)
    }
    
    return (
        <div>
            <div className="container">
                <div className="search">
                    <form onSubmit={fetchSearchData}>
                        <div className="search-form">
                            <input type="text" placeholder="Search" onChange={handleQueryChange} />
                            <div className="search-icon">
                                <FaSistrix/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="inner-container">
                    {results.map(show => (
                        
                        <ResultCard result={show} key={show.id}/>
                        
                    ))}
                </div>
                <div className="load-btn-container">
                    <button className="load-btn" onClick={handleLoadMore}>Load More</button>
                </div>
            </div>
        </div>
        
    )
}
