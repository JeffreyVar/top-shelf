import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import './SearchNameResults.css'

function SearchResults () {
    //const cocktailResults = useSelector(store => store.resultsReducer)
    //const search = useSelector(store => store.searchReducer)

    const search = useParams();

    const [cocktailResults, setCocktailResults] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory(); 

    const openCocktail = (cocktailId) => {
        // dispatch({ type: 'OPEN_COCKTAIL_SAGA', payload: cocktailId })
        history.push(`/searchitem/${cocktailId}`);
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
                <div id="item-container" >
                {cocktailResults && cocktailResults.length > 0 ? (
                    <ul style={{ listStyleType: 'none', margin: '0', padding: '0', alignItems: 'center' }}>
                    {cocktailResults.map((result) => (
                        <li id="list-item" key={result.idDrink} onClick={() => openCocktail(result.idDrink)}>
                        <img
                            id="list-image"
                            src={result.strDrinkThumb}
                            alt={result.strDrink}
                            
                        />
                        <h3 id="drink-name">{result.strDrink.toUpperCase()}</h3>
                        </li>
                    ))}
                    </ul> 
            
                ) : (
                    <h3 id="no-results">No results found</h3>
            )}
            </div>
        </div>
    );
}

export default SearchResults;