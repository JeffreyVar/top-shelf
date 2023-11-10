// React
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Axios
import axios from 'axios';

// Components
import Nav from '../Nav/Nav';

function SavedRecipes() {

    const history = useHistory();

    const [savedCocktails, setSavedCocktails] = useState([]);

    const fetchSavedCocktails = () => {
        axios.get('/api/saved_cocktails')
            .then((response) => {
                setSavedCocktails(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const openSavedCocktail = (id) => {
        history.push(`/saveditem/${id}`);
    }

    useEffect(() => {
        fetchSavedCocktails();
    }, []);

    return (
        <div>
            <Nav />
            <h2 id="page-title">SAVED COCKTAILS</h2>
            <div id="result-container" >
                {Array.isArray(savedCocktails) && savedCocktails && savedCocktails.length > 0 ? (
                    <ul style={{ listStyleType: 'none', margin: '0', padding: '0', alignItems: 'center' }}>
                        {savedCocktails.map((item) => (
                            <li id="list-item" key={item.id} onClick={() => openSavedCocktail(item.id)}>
                                <img
                                    id="list-image"
                                    src={item.image}
                                    alt={item.cocktail_name}
                                />
                                <h3 id="drink-name">{item.cocktail_name}</h3>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h3 id="no-results">NO SAVED COCKTAILS</h3>
                )}
            </div>
        </div>
    );

};

export default SavedRecipes;