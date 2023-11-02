import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import Nav from '../Nav/Nav';


// Styles
import './SearchItem.css'

// Material UI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function SearchItem() {
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

    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const addToSaved = () => {
        handleClose();
        dispatch({ type: 'SAVE_COCKTAIL_SAGA', payload: { userId: user.id, item: cocktail } })
        console.log(user.id, item);
        history.push(`/savedlist`);
    }

    useEffect(() => {
        fetchSearchCocktail();
    }, []);

    return (
        <div>
            <Nav /> 
            <h2 id="page-title">{cocktail.strDrink}</h2>
            <div id="add-to-saved">
                <button id="save-button" onClick={handleClickOpen}>Add to Saved
                    <Dialog
                        open={openDialog}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                        id="dialog"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Cocktail successfully saved!"}
                        </DialogTitle>

                        <DialogActions>
                            <Button autoFocus id="responsive-dialog-title" onClick={addToSaved}>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                </button>
            </div>
            <div id="item-container">
                <div id="drink-img-ingredients">
                    <img
                        src={cocktail.strDrinkThumb}
                        alt={cocktail.strDrink}
                        id="item-image"
                    />
                    <div id="ingredients">
                        <h3 id="ingredient-header">Ingredients:</h3>
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
                    </div>
                </div>
                <div id="instructions">
                    <h3 id="instructions-header">Instructions: </h3>
                    <p>{cocktail.strInstructions}</p>
                </div>
            </div>
            <br />
        </div>
    )
}

export default SearchItem;