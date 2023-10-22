import React, {useState, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SavedRecipes () {
    let [savedCocktails, setSavedCocktails] = useState([]);
  
    const fetchSavedCocktails = () => {
      axios.get('/api/saved_cocktails')
      .then((response) => {
        console.log(response.data);
        setSavedCocktails(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    }
    
    const dispatch = useDispatch();
    const history = useHistory(); 

    const openSavedCocktail = (id) => {
        // dispatch({ type: 'OPEN_SAVED_COCKTAIL_SAGA', payload: id })
        history.push(`/saveditem/${id}`);
        console.log(id);
    }

    useEffect(() => {
        fetchSavedCocktails();
      }, []);

    return (
        <div>
            <h2 id="page-title">SAVED RECIPES</h2>
            <div id="result-container" >
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
            </div>
        </div>
    );

};

export default SavedRecipes;