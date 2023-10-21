import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function SearchItem () {
    const item = useSelector(store => store.cocktailItemReducer)
    const user = useSelector((store) => store.user);
    const [cocktail, setCocktail] = useState({});

    const dispatch = useDispatch();
    const history = useHistory();
    const id = useParams();

    const fetchSearchCocktail = () => {
        axios.post(`/api/cocktails/${id.id}`)
        .then((response) => {
          console.log(response.data);
          setCocktail(response.data.drinks[0]);
        })
        .catch((error) => {
          console.log(error);
        })
      }

    const addtoSaved = () => {
        dispatch({ type: 'SAVE_COCKTAIL_SAGA', payload: {userId: user.id, item: item}})
        console.log(user.id, item);
        history.push(`/savedlist`);
    }

    useEffect(() => {
        fetchSearchCocktail();
    }, []);

    return (
        <div>
            <h2 id="cocktail-title">{cocktail.strDrink}</h2>
            <img 
                src={cocktail.strDrinkThumb} 
                alt={cocktail.strDrink} 
                width="125"
                height="125"
            />
            <h3>Ingredients:</h3>
            <ul>
                {cocktail.strMeasure1 && cocktail.strIngredient1 && (
                    <li>{cocktail.strMeasure1}  {cocktail.strIngredient1}</li>
                )}
                {cocktail.strMeasure2 && cocktail.strIngredient2 && (
                    <li>{cocktail.strMeasure2}  {cocktail.strIngredient2}</li>
                )}
                {cocktail.strMeasure3 && cocktail.strIngredient3 && (
                    <li>{cocktail.strMeasure3}  {cocktail.strIngredient3}</li>
                )}
                {cocktail.strMeasure4 && cocktail.strIngredient4 && (
                    <li>{cocktail.strMeasure4}  {cocktail.strIngredient4}</li>
                )}
                {cocktail.strMeasure5 && cocktail.strIngredient5 && (
                    <li>{cocktail.strMeasure5}  {cocktail.strIngredient5}</li>
                )}
                {cocktail.strMeasure6 && cocktail.strIngredient6 && (
                    <li>{cocktail.strMeasure6}  {cocktail.strIngredient6}</li>
                )}
                {cocktail.strMeasure7 && cocktail.strIngredient7 && (
                    <li>{cocktail.strMeasure7}  {cocktail.strIngredient7}</li>
                )}
                {cocktail.strMeasure8 && cocktail.strIngredient8 && (
                    <li>{cocktail.strMeasure8}  {cocktail.strIngredient8}</li>
                )}
                {cocktail.strMeasure9 && cocktail.strIngredient9 && (
                    <li>{cocktail.strMeasure9}  {cocktail.strIngredient9}</li>
                )}
                {cocktail.strMeasure10 && cocktail.strIngredient10 && (
                    <li>{cocktail.strMeasure10}  {cocktail.strIngredient10}</li>
                )}
                {cocktail.strMeasure11 && cocktail.strIngredient11 && (
                    <li>{cocktail.strMeasure11}  {cocktail.strIngredient11}</li>
                )}
                {cocktail.strMeasure12 && cocktail.strIngredient12 && (
                    <li>{cocktail.strMeasure12}  {cocktail.strIngredient12}</li>
                )}
            </ul>
            <br/>
            <h3>Instructions: </h3>
            <p>{cocktail.strInstructions}</p>
            <br/>
            <button onClick={addtoSaved}>Add to Saved</button>
        </div>
    )
}

export default SearchItem;