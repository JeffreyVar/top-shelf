import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import './SearchResults.css'

function SearchResults () {
    //const cocktailResults = useSelector(store => store.resultsReducer)
    //const search = useSelector(store => store.searchReducer)

    const search = useParams();

    const [cocktailResults, setCocktailResults] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory(); 

    const openCocktail = (cocktailId) => {
        dispatch({ type: 'OPEN_COCKTAIL_SAGA', payload: cocktailId })
        history.push(`/searchitem`);
        console.log(cocktailId);
    }

    const fetchCocktailResults = () => {
        axios.post(`/search_by_name/${search.id}`)
        .then((response) => {
          console.log("LOOOK", response.data.drinks);
          setCocktailResults(response.data.drinks);
        })
        .catch((error) => {
          console.log(error);
        })
      }

    useEffect(() => {
        fetchCocktailResults();
        console.log(search.id);
        //dispatch({ type: 'SEARCH_NAME_SAGA', payload: searchQuery })
    }, []);

    return (
        <div>
            <h2 id="cocktail-title">RESULTS FOR {search.id}</h2>
                {cocktailResults && cocktailResults.length > 0 ? (
                    <ul style={{ listStyleType: 'none' }}>
                    {cocktailResults.map((result) => (
                        <li key={result.idDrink}>
                        <h3>{result.strDrink.toUpperCase()}</h3>
                        <img
                            id="list-image"
                            src={result.strDrinkThumb}
                            alt={result.strDrink}
                            onClick={() => openCocktail(result.idDrink)}
                            width="125"
                            height="125"
                        />
                        </li>
                    ))}
                    </ul>
                ) : (
                    <h3 id="no-results">No results found</h3>
            )}
        </div>
    );
}

export default SearchResults;