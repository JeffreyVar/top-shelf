// React imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Axios
import axios from 'axios';

// Styles
import './SavedItem.css';

// Material UI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function SavedItem() {
    const item = useSelector(store => store.savedItemReducer)
    const user = useSelector((store) => store.user);

    const [cocktail, setCocktail] = useState({});
    const [editMode, setEditMode] = useState(false);

    const [editedMeasure1, setEditedMeasure1] = useState(cocktail.measure1);
    const [editedMeasure2, setEditedMeasure2] = useState(cocktail.measure2);
    const [editedMeasure3, setEditedMeasure3] = useState(cocktail.measure3);
    const [editedMeasure4, setEditedMeasure4] = useState(cocktail.measure4);
    const [editedMeasure5, setEditedMeasure5] = useState(cocktail.measure5);
    const [editedMeasure6, setEditedMeasure6] = useState(cocktail.measure6);
    const [editedMeasure7, setEditedMeasure7] = useState(cocktail.measure7);
    const [editedMeasure8, setEditedMeasure8] = useState(cocktail.measure8);
    const [editedMeasure9, setEditedMeasure9] = useState(cocktail.measure9);
    const [editedMeasure10, setEditedMeasure10] = useState(cocktail.measure10);
    const [editedMeasure11, setEditedMeasure11] = useState(cocktail.measure11);
    const [editedMeasure12, setEditedMeasure12] = useState(cocktail.measure12);
    const [editedIngredient1, setEditedIngredient1] = useState(cocktail.ingredient1);
    const [editedIngredient2, setEditedIngredient2] = useState(cocktail.ingredient2);
    const [editedIngredient3, setEditedIngredient3] = useState(cocktail.ingredient3);
    const [editedIngredient4, setEditedIngredient4] = useState(cocktail.ingredient4);
    const [editedIngredient5, setEditedIngredient5] = useState(cocktail.ingredient5);
    const [editedIngredient6, setEditedIngredient6] = useState(cocktail.ingredient6);
    const [editedIngredient7, setEditedIngredient7] = useState(cocktail.ingredient7);
    const [editedIngredient8, setEditedIngredient8] = useState(cocktail.ingredient8);
    const [editedIngredient9, setEditedIngredient9] = useState(cocktail.ingredient9);
    const [editedIngredient10, setEditedIngredient10] = useState(cocktail.ingredient10);
    const [editedIngredient11, setEditedIngredient11] = useState(cocktail.ingredient11);
    const [editedIngredient12, setEditedIngredient12] = useState(cocktail.ingredient12);

    const [editedInstructions, setEditedInstructions] = useState(cocktail.instructions);
  
    const dispatch = useDispatch();
    const history = useHistory();
    const id = useParams();

    const numId = parseInt(id.id);

    let editedCocktail = {
        id: numId,
        user_id: user.id,
        cocktail_name: cocktail.cocktail_name,
        image: cocktail.image,
        instructions: editedInstructions,
        ingredient1: editedIngredient1,
        measure1: editedMeasure1,
        ingredient2: editedIngredient2,
        measure2: editedMeasure2,
        ingredient3: editedIngredient3,
        measure3: editedMeasure3,
        ingredient4: editedIngredient4,
        measure4: editedMeasure4,
        ingredient5: editedIngredient5,
        measure5: editedMeasure5,
        ingredient6: editedIngredient6,
        measure6: editedMeasure6,
        ingredient7: editedIngredient7,
        measure7: editedMeasure7,
        ingredient8:editedIngredient8,
        measure8: editedMeasure8,
        ingredient9: editedIngredient9,
        measure9: editedMeasure9,
        ingredient10: editedIngredient10,
        measure10: editedMeasure10,
        ingredient11: editedIngredient11,
        measure11: editedMeasure11,
        ingredient12: editedIngredient12,
        measure12: editedMeasure12
    };

    // Material UI

    const [open, setOpen] = useState(false);
    const theme = useTheme();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    //

    const fetchSavedCocktail = () => {
        axios.get(`/api/saved_cocktails/${id.id}`)
        .then((response) => {
          console.log(response.data);
          setCocktail(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    };


    const deleteSaved = () => {
        handleClose();
        axios.delete(`/api/saved_cocktails/${id.id}`)
        history.push(`/savedlist`);
    }

    const saveChanges = () => {
        console.log(editedCocktail);
        dispatch({
          type: 'UPDATE_COCKTAIL_SAGA', 
          payload: {
            id: numId,
            editedCocktail: editedCocktail,
        }
        });
        fetchSavedCocktail();
        setEditMode(false);
    };

    useEffect(() => {
        fetchSavedCocktail();
    }, []);

    useEffect(() => {
        setEditedMeasure1(cocktail.measure1)
        setEditedMeasure2(cocktail.measure2)
        setEditedMeasure3(cocktail.measure3)
        setEditedMeasure4(cocktail.measure4)
        setEditedMeasure5(cocktail.measure5)
        setEditedMeasure6(cocktail.measure6)
        setEditedMeasure7(cocktail.measure7)
        setEditedMeasure8(cocktail.measure8)
        setEditedMeasure9(cocktail.measure9)
        setEditedMeasure10(cocktail.measure10)
        setEditedMeasure11(cocktail.measure11)
        setEditedMeasure12(cocktail.measure12)
        setEditedIngredient1(cocktail.ingredient1)
        setEditedIngredient2(cocktail.ingredient2)
        setEditedIngredient3(cocktail.ingredient3)
        setEditedIngredient4(cocktail.ingredient4)
        setEditedIngredient5(cocktail.ingredient5)
        setEditedIngredient6(cocktail.ingredient6)
        setEditedIngredient7(cocktail.ingredient7)
        setEditedIngredient8(cocktail.ingredient8)
        setEditedIngredient9(cocktail.ingredient9)
        setEditedIngredient10(cocktail.ingredient10)
        setEditedIngredient11(cocktail.ingredient11)
        setEditedIngredient12(cocktail.ingredient12)
        setEditedInstructions(cocktail.instructions)
        
        //dispatch({ type: 'OPEN_SAVED_COCKTAIL_SAGA', payload: id.id });
    }, [cocktail]);

    return (
        <div>
            <h2 id="page-title">{cocktail.cocktail_name}</h2>

            {editMode ? ( // Display edit fields if editMode is true
            <div>
                <div id="button-group">
                            <button id="save" onClick={saveChanges}>Save Changes</button>
                            <button id="cancel" onClick={() => setEditMode(false)}>Cancel</button>
                </div>
                <div id="item-container">
                    <div id="image-div">
                    <img 
                        src={cocktail.image} 
                        alt={cocktail.cocktail_name} 
                        width="125"
                        height="125"
                        id="edit-img"
                    />
                    </div>
                    
                        <h3>Ingredients:</h3>
                        <textarea
                            id="text-area"
                            rows="1"
                            cols="12"
                            value={editedMeasure1}
                            onChange={(e) => setEditedMeasure1(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient1}
                            onChange={(e) => setEditedIngredient1(e.target.value)}
                        />
                        <br/> {/*Begin Row 2 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure2}
                            onChange={(e) => setEditedMeasure2(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient2}
                            onChange={(e) => setEditedIngredient2(e.target.value)}
                        />
                        <br/> {/*Begin Row 3 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure3}
                            onChange={(e) => setEditedMeasure3(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient3}
                            onChange={(e) => setEditedIngredient3(e.target.value)}
                        />
                        <br/> {/*Begin Row 4 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure4}
                            onChange={(e) => setEditedMeasure4(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient4}
                            onChange={(e) => setEditedIngredient4(e.target.value)}
                        />
                        <br /> {/*Begin Row 5 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure5}
                            onChange={(e) => setEditedMeasure5(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient5}
                            onChange={(e) => setEditedIngredient5(e.target.value)}
                        />
                        <br/> {/*Begin Row 6 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure6}
                            onChange={(e) => setEditedMeasure6(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient6}
                            onChange={(e) => setEditedIngredient6(e.target.value)}
                        />
                        <br/> {/*Begin Row 7 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure7}
                            onChange={(e) => setEditedMeasure7(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient7}
                            onChange={(e) => setEditedIngredient7(e.target.value)}
                        />
                        <br/> {/*Begin Row 8 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure8}
                            onChange={(e) => setEditedMeasure8(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient8}
                            onChange={(e) => setEditedIngredient8(e.target.value)}
                        />
                        <br/> {/*Begin Row 9 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure9}
                            onChange={(e) => setEditedMeasure9(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient9}
                            onChange={(e) => setEditedIngredient9(e.target.value)}
                        />
                        <br/> {/*Begin Row 10 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure10}
                            onChange={(e) => setEditedMeasure10(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient10}
                            onChange={(e) => setEditedIngredient10(e.target.value)}
                        />
                        <br/> {/*Begin Row 11 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure11}
                            onChange={(e) => setEditedMeasure11(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient11}
                            onChange={(e) => setEditedIngredient11(e.target.value)}
                        />
                        <br/> {/*Begin Row 12 */}
                        <textarea
                            rows="1"
                            cols="12"
                            value={editedMeasure12}
                            onChange={(e) => setEditedMeasure12(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="20"
                            value={editedIngredient12}
                            onChange={(e) => setEditedIngredient12(e.target.value)}
                        />
                        <br/>
                        <h3>Instructions:</h3>
                        <textarea
                            rows="7"
                            cols="38"
                            value={editedInstructions}
                            onChange={(e) => setEditedInstructions(e.target.value)}
                        />
                </div>
            </div>
            ) : (
                <div>
                    <div id="button-group">
                        <button id="edit" onClick={() => {setEditMode(true)}}>Edit</button>
                        <button id="remove" onClick={handleClickOpen}>Remove
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                                id="dialog"
                            >
                                <DialogTitle id="responsive-dialog-title">
                                {"Remove this cocktail from Saved Cocktails?"}
                                </DialogTitle>
                                
                                <DialogActions>
                                <Button autoFocus id="responsive-dialog-title" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button autoFocus id="responsive-dialog-title" onClick={deleteSaved}>
                                    Confirm
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </button>
                    </div>
                    <div id="item-container">
                        <div id="drink-img-ingredients">
                            <img 
                                src={cocktail.image} 
                                alt={cocktail.cocktail_name} 
                                width="125"
                                height="125"
                                id="item-image"
                            />
                        <div id="ingredients">
                            <h3 id="ingredient-header">Ingredients:</h3>
                            <ul>
                                {cocktail.measure1 && cocktail.ingredient1 && (
                                    <li>{cocktail.measure1}  {cocktail.ingredient1}</li>
                                )}
                                {cocktail.measure2 && cocktail.ingredient2 && (
                                    <li>{cocktail.measure2}  {cocktail.ingredient2}</li>
                                )}
                                {cocktail.measure3 && cocktail.ingredient3 && (
                                    <li>{cocktail.measure3}  {cocktail.ingredient3}</li>
                                )}
                                {cocktail.measure4 && cocktail.ingredient4 && (
                                    <li>{cocktail.measure4}  {cocktail.ingredient4}</li>
                                )}
                                {cocktail.measure5 && cocktail.ingredient5 && (
                                    <li>{cocktail.measure5}  {cocktail.ingredient5}</li>
                                )}
                                {cocktail.measure6 && cocktail.ingredient6 && (
                                    <li>{cocktail.measure6}  {cocktail.ingredient6}</li>
                                )}
                                {cocktail.measure7 && cocktail.ingredient7 && (
                                    <li>{cocktail.measure7}  {cocktail.ingredient7}</li>
                                )}
                                {cocktail.measure8 && cocktail.ingredient8 && (
                                    <li>{cocktail.measure8}  {cocktail.ingredient8}</li>
                                )}
                                {cocktail.measure9 && cocktail.ingredient9 && (
                                    <li>{cocktail.measure9}  {cocktail.ingredient9}</li>
                                )}
                                {cocktail.measure10 && cocktail.ingredient10 && (
                                    <li>{cocktail.measure10}  {cocktail.ingredient10}</li>
                                )}
                                {cocktail.measure11 && cocktail.ingredient11 && (
                                    <li>{cocktail.measure11}  {cocktail.ingredient11}</li>
                                )}
                                {cocktail.measure12 && cocktail.ingredient12 && (
                                    <li>{cocktail.measure12}  {cocktail.ingredient12}</li>
                                )}
                            </ul>
                        </div>
                        </div>
                        <div id="instructions">
                            <h3>Instructions: </h3>
                            <p>{cocktail.instructions}</p>
                        </div>
                    </div>
                    <br/>
                </div>
    )}
        </div>
  );
}

export default SavedItem;