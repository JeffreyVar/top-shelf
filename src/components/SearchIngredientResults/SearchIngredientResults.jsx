// React
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// Axios
import axios from 'axios';

// Components
import Nav from '../Nav/Nav';

// Styles
import '../SearchNameResults/SearchNameResults.css'

function SearchIngredientResults() {

    const search = useParams();
    const history = useHistory();

    const stringSearch = search.id
    let newSearch = stringSearch.replace(/,/g, '+');

    const [cocktailResults, setCocktailResults] = useState([]);

    const openCocktail = (cocktailId) => {
        history.push(`/searchitem/${cocktailId}`);
        // console.log(cocktailId);
    }

    const fetchCocktailResults = () => {
        axios.post(`/search_by_ingredient/${search.id}`)
            .then((response) => {
                // console.log("LOOOK", response.data.drinks);
                setCocktailResults(response.data.drinks);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchCocktailResults();
        // console.log(search.id);
        // console.log(typeof search);
    }, []);

    return (
        <div>
            <Nav />
            <h2 id="page-title">RESULTS FOR {newSearch}</h2>
            <div id="result-container" >
                {cocktailResults && Array.isArray(cocktailResults) ? (
                    <>
                        {Array.isArray(cocktailResults) && cocktailResults && cocktailResults.length > 0 ? (
                            <ul style={{ listStyleType: 'none', margin: '0', padding: '0', alignItems: 'center' }}>
                                {cocktailResults.map((result) => (
                                    <li id="list-item" key={result.idDrink} onClick={() => openCocktail(result.idDrink)}>
                                        <img
                                            id="list-image"
                                            src={result.strDrinkThumb}
                                            alt={result.strDrink}
                                        />
                                        <h3 id="drink-name">{result.strDrink}</h3>
                                    </li>
                                ))}
                            </ul>

                        ) : (
                            <h3 id="no-results">Loading...</h3>
                        )}
                    </>
                ) : (
                    <>
                        <h3 id="no-results">No Results Found</h3>
                    </>
                )}
            </div>
        </div>
    );
}

export default SearchIngredientResults;