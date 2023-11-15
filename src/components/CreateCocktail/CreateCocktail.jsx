// React imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

// Styles
import './CreateCocktail.css';

// Components
import Nav from '../Nav/Nav';


// Material UI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';

function CreateCocktail() {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((store) => store.user);

    const [measure1, setMeasure1] = useState('');
    const [measure2, setMeasure2] = useState('');
    const [measure3, setMeasure3] = useState('');
    const [measure4, setMeasure4] = useState('');
    const [measure5, setMeasure5] = useState('');
    const [measure6, setMeasure6] = useState('');
    const [measure7, setMeasure7] = useState('');
    const [measure8, setMeasure8] = useState('');
    const [measure9, setMeasure9] = useState('');
    const [measure10, setMeasure10] = useState('');
    const [measure11, setMeasure11] = useState('');
    const [measure12, setMeasure12] = useState('');
    const [ingredient1, setIngredient1] = useState('');
    const [ingredient2, setIngredient2] = useState('');
    const [ingredient3, setIngredient3] = useState('');
    const [ingredient4, setIngredient4] = useState('');
    const [ingredient5, setIngredient5] = useState('');
    const [ingredient6, setIngredient6] = useState('');
    const [ingredient7, setIngredient7] = useState('');
    const [ingredient8, setIngredient8] = useState('');
    const [ingredient9, setIngredient9] = useState('');
    const [ingredient10, setIngredient10] = useState('');
    const [ingredient11, setIngredient11] = useState('');
    const [ingredient12, setIngredient12] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    const [instructions, setInstructions] = useState('');

    let newCocktail = {
        user_id: user.id,
        strDrink: name,
        strDrinkThumb: image,
        strInstructions: instructions,
        strIngredient1: ingredient1,
        strMeasure1: measure1,
        strIngredient2: ingredient2,
        strMeasure2: measure2,
        strIngredient3: ingredient3,
        strMeasure3: measure3,
        strIngredient4: ingredient4,
        strMeasure4: measure4,
        strIngredient5: ingredient5,
        strMeasure5: measure5,
        strIngredient6: ingredient6,
        strMeasure6: measure6,
        strIngredient7: ingredient7,
        strMeasure7: measure7,
        strIngredient8: ingredient8,
        strMeasure8: measure8,
        strIngredient9: ingredient9,
        strMeasure9: measure9,
        strIngredient10: ingredient10,
        strMeasure10: measure10,
        strIngredient11: ingredient11,
        strMeasure11: measure11,
        strIngredient12: ingredient12,
        strMeasure12: measure12
    };

    // Material UI Dialog Box

    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const addCocktail = () => {
        handleClose();
        console.log(newCocktail);
        dispatch({ type: 'SAVE_COCKTAIL_SAGA', payload: { userId: user.id, item: newCocktail } })
        history.push(`/savedlist`);
    };

    const cancel = () => {
        history.push(`/home`);
    }

    return (
        <div>
            <Nav />
            <h2 id="page-title">Create New Cocktail</h2>
            <div>
                <div id="edit-button-group">
                    <button id="save" onClick={handleClickOpen}>Save Changes
                        <Dialog
                            open={openDialog}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                            id="dialog"
                        >
                            <DialogTitle id="responsive-dialog-title">
                                {"Cocktail successfully added!"}
                            </DialogTitle>

                            <DialogActions>
                                <Button autoFocus id="responsive-dialog-title" onClick={addCocktail}>
                                    OK
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </button>
                    <button id="cancel" onClick={cancel}>Cancel</button>
                </div>
                <div>

                </div>
                <div id="item-container">
                    <h3>COCKTAIL NAME:</h3>
                    <textarea
                        id="text-area"
                        rows="1"
                        cols="25"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <h3>IMAGE URL:</h3>
                    <textarea
                        id="text-area"
                        rows="3"
                        cols="30"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />

                    <h3>Ingredients:</h3>
                    <textarea
                        id="measurement-text-area"
                        placeholder='Measurement 1'
                        rows="1"
                        cols="14"
                        value={measure1}
                        onChange={(e) => setMeasure1(e.target.value)}
                    />
                    <textarea
                        id="ingredient-text-area"
                        placeholder='Ingredient 1'
                        rows="1"
                        cols="20"
                        value={ingredient1}
                        onChange={(e) => setIngredient1(e.target.value)}
                    />
                    <br /> {/*Begin Row 2 */}
                    <textarea
                        placeholder='Measurement 2'
                        rows="1"
                        cols="14"
                        value={measure2}
                        onChange={(e) => setMeasure2(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 2'
                        rows="1"
                        cols="20"
                        value={ingredient2}
                        onChange={(e) => setIngredient2(e.target.value)}
                    />
                    <br /> {/*Begin Row 3 */}
                    <textarea
                        placeholder='Measurement 3'
                        rows="1"
                        cols="14"
                        value={measure3}
                        onChange={(e) => setMeasure3(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 3'
                        rows="1"
                        cols="20"
                        value={ingredient3}
                        onChange={(e) => setIngredient3(e.target.value)}
                    />
                    <br /> {/*Begin Row 4 */}
                    <textarea
                        placeholder='Measurement 4'
                        rows="1"
                        cols="14"
                        value={measure4}
                        onChange={(e) => setMeasure4(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 4'
                        rows="1"
                        cols="20"
                        value={ingredient4}
                        onChange={(e) => setIngredient4(e.target.value)}
                    />
                    <br /> {/*Begin Row 5 */}
                    <textarea
                        placeholder='Measurement 5'
                        rows="1"
                        cols="14"
                        value={measure5}
                        onChange={(e) => setMeasure5(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 5'
                        rows="1"
                        cols="20"
                        value={ingredient5}
                        onChange={(e) => setIngredient5(e.target.value)}
                    />
                    <br /> {/*Begin Row 6 */}
                    <textarea
                        placeholder='Measurement 6'
                        rows="1"
                        cols="14"
                        value={measure6}
                        onChange={(e) => setMeasure6(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 6'
                        rows="1"
                        cols="20"
                        value={ingredient6}
                        onChange={(e) => setIngredient6(e.target.value)}
                    />
                    <br /> {/*Begin Row 7 */}
                    <textarea
                        placeholder='Measurement 7'
                        rows="1"
                        cols="14"
                        value={measure7}
                        onChange={(e) => setMeasure7(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 7'
                        rows="1"
                        cols="20"
                        value={ingredient7}
                        onChange={(e) => setIngredient7(e.target.value)}
                    />
                    <br /> {/*Begin Row 8 */}
                    <textarea
                        placeholder='Measurement 8'
                        rows="1"
                        cols="14"
                        value={measure8}
                        onChange={(e) => setMeasure8(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 8'
                        rows="1"
                        cols="20"
                        value={ingredient8}
                        onChange={(e) => setIngredient8(e.target.value)}
                    />
                    <br /> {/*Begin Row 9 */}
                    <textarea
                        placeholder='Measurement 9'
                        rows="1"
                        cols="14"
                        value={measure9}
                        onChange={(e) => setMeasure9(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 9'
                        rows="1"
                        cols="20"
                        value={ingredient9}
                        onChange={(e) => setIngredient9(e.target.value)}
                    />
                    <br /> {/*Begin Row 10 */}
                    <textarea
                        placeholder='Measurement 10'
                        rows="1"
                        cols="14"
                        value={measure10}
                        onChange={(e) => setMeasure10(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 10'
                        rows="1"
                        cols="20"
                        value={ingredient10}
                        onChange={(e) => setIngredient10(e.target.value)}
                    />
                    <br /> {/*Begin Row 11 */}
                    <textarea
                        placeholder='Measurement 11'
                        rows="1"
                        cols="14"
                        value={measure11}
                        onChange={(e) => setMeasure11(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 11'
                        rows="1"
                        cols="20"
                        value={ingredient11}
                        onChange={(e) => setIngredient11(e.target.value)}
                    />
                    <br /> {/*Begin Row 12 */}
                    <textarea
                        placeholder='Measurement 12'
                        rows="1"
                        cols="14"
                        value={measure12}
                        onChange={(e) => setMeasure12(e.target.value)}
                    />
                    <textarea
                        placeholder='Ingredient 12'
                        rows="1"
                        cols="20"
                        value={ingredient12}
                        onChange={(e) => setIngredient12(e.target.value)}
                    />
                    <br />
                    <h3>Instructions:</h3>
                    <textarea
                        rows="7"
                        cols="38"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );

};

export default CreateCocktail;