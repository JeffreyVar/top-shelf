import React, {useState, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SavedRecipes () {
    let [savedCocktails, setSavedCocktails] = useState([]);
  
    const fetchSavedCocktails = () => {
      // TODO: fetch the list of tasks from the server
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
        dispatch({ type: 'OPEN_SAVED_COCKTAIL_SAGA', payload: id })
        history.push(`/saveditem`);
        console.log(id);
    }

    useEffect(() => {
        fetchSavedCocktails();
      }, []);

    return (
        <div>
            <h2>SAVED RECIPES</h2>
            <ul style={{ listStyleType: 'none' }}>
                {savedCocktails.map((item) => (
                <li key={item.id}>
                    <h3>{item.cocktail_name.toUpperCase()}</h3>
                    <img 
                        src={item.image} 
                        alt={item.cocktail_name} 
                        onClick={() => openSavedCocktail(item.id)}
                        width="125"
                        height="125"
                    />
                    {/* <p>Instructions: </p>
                        <p>{item.strInstructions}</p>
                    <p>Ingredients:</p>
                    <ul>
                        {item.measure1 && item.ingredient1 && (
                            <li>{item.measure1}{item.ingredient1}</li>
                        )}
                        {item.measure2 && item.ingredient2 && (
                            <li>{item.measure2}{item.ingredient2}</li>
                        )}
                        {item.measure3 && item.ingredient3 && (
                            <li>{item.measure3}{item.ingredient3}</li>
                        )}
                        {item.measure4 && item.ingredient4 && (
                            <li>{item.measure4}{item.ingredient4}</li>
                        )}
                        {item.measure5 && item.ingredient5 && (
                            <li>{item.measure5}{item.ingredient5}</li>
                        )}
                        {item.measure6 && item.ingredient6 && (
                            <li>{item.measure6}{item.ingredient6}</li>
                        )}
                        {item.measure7 && item.ingredient7 && (
                            <li>{item.measure7}{item.ingredient7}</li>
                        )}
                        {item.measure8 && item.ingredient8 && (
                            <li>{item.measure8}{item.ingredient8}</li>
                        )}
                        {item.measure9 && item.ingredient9 && (
                            <li>{item.measure9}{item.ingredient9}</li>
                        )}
                        {item.measure10 && item.ingredient10 && (
                            <li>{item.measure10}{item.ingredient10}</li>
                        )}
                        {item.measure11 && item.ingredient11 && (
                            <li>{item.measure11}{item.ingredient11}</li>
                        )}
                        {item.measure12 && item.ingredient12 && (
                            <li>{item.measure12}{item.ingredient12}</li>
                        )}
                    </ul> */}
                </li>
                ))}
            </ul>
        </div>
    );

};

export default SavedRecipes;