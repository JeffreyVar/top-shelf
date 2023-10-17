import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function SearchItem () {
    const item = useSelector(store => store.cocktailItemReducer)
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();
    const history = useHistory();

    const addtoSaved = () => {
        dispatch({ type: 'SAVE_COCKTAIL_SAGA', payload: {userId: user.id, item: item}})
        console.log(user.id, item);
        history.push(`/savedlist`);
    }

    return (
        <div>
            <h2>{item.strDrink.toUpperCase()}</h2>
            <img 
                src={item.strDrinkThumb} 
                alt={item.strDrink} 
                width="125"
                height="125"
            />
            <h3>Ingredients:</h3>
            <ul>
                {item.strMeasure1 && item.strIngredient1 && (
                    <li>{item.strMeasure1}  {item.strIngredient1}</li>
                )}
                {item.strMeasure2 && item.strIngredient2 && (
                    <li>{item.strMeasure2}  {item.strIngredient2}</li>
                )}
                {item.strMeasure3 && item.strIngredient3 && (
                    <li>{item.strMeasure3}  {item.strIngredient3}</li>
                )}
                {item.strMeasure4 && item.strIngredient4 && (
                    <li>{item.strMeasure4}  {item.strIngredient4}</li>
                )}
                {item.strMeasure5 && item.strIngredient5 && (
                    <li>{item.strMeasure5}  {item.strIngredient5}</li>
                )}
                {item.strMeasure6 && item.strIngredient6 && (
                    <li>{item.strMeasure6}  {item.strIngredient6}</li>
                )}
                {item.strMeasure7 && item.strIngredient7 && (
                    <li>{item.strMeasure7}  {item.strIngredient7}</li>
                )}
                {item.strMeasure8 && item.strIngredient8 && (
                    <li>{item.strMeasure8}  {item.strIngredient8}</li>
                )}
                {item.strMeasure9 && item.strIngredient9 && (
                    <li>{item.strMeasure9}  {item.strIngredient9}</li>
                )}
                {item.strMeasure10 && item.strIngredient10 && (
                    <li>{item.strMeasure10}  {item.strIngredient10}</li>
                )}
                {item.strMeasure11 && item.strIngredient11 && (
                    <li>{item.strMeasure11}  {item.strIngredient11}</li>
                )}
                {item.strMeasure12 && item.strIngredient12 && (
                    <li>{item.strMeasure12}  {item.strIngredient12}</li>
                )}
            </ul>
            <br/>
            <h3>Instructions: </h3>
            <p>{item.strInstructions}</p>
            <br/>
            <button onClick={addtoSaved}>Add to Saved</button>
        </div>
    )
}

export default SearchItem;