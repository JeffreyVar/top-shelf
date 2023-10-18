import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function SavedItem() {
    const item = useSelector(store => store.savedItemReducer)
    const user = useSelector((store) => store.user);

    const [editMode, setEditMode] = useState(false);

    const [editedMeasure1, setEditedMeasure1] = useState(item.measure1);
    const [editedMeasure2, setEditedMeasure2] = useState(item.measure2);
    const [editedMeasure3, setEditedMeasure3] = useState(item.measure3);
    const [editedMeasure4, setEditedMeasure4] = useState(item.measure4);
    const [editedMeasure5, setEditedMeasure5] = useState(item.measure5);
    const [editedMeasure6, setEditedMeasure6] = useState(item.measure6);
    const [editedMeasure7, setEditedMeasure7] = useState(item.measure7);
    const [editedMeasure8, setEditedMeasure8] = useState(item.measure8);
    const [editedMeasure9, setEditedMeasure9] = useState(item.measure9);
    const [editedMeasure10, setEditedMeasure10] = useState(item.measure10);
    const [editedMeasure11, setEditedMeasure11] = useState(item.measure11);
    const [editedMeasure12, setEditedMeasure12] = useState(item.measure12);
    const [editedIngredient1, setEditedIngredient1] = useState(item.ingredient1);
    const [editedIngredient2, setEditedIngredient2] = useState(item.ingredient2);
    const [editedIngredient3, setEditedIngredient3] = useState(item.ingredient3);
    const [editedIngredient4, setEditedIngredient4] = useState(item.ingredient4);
    const [editedIngredient5, setEditedIngredient5] = useState(item.ingredient5);
    const [editedIngredient6, setEditedIngredient6] = useState(item.ingredient6);
    const [editedIngredient7, setEditedIngredient7] = useState(item.ingredient7);
    const [editedIngredient8, setEditedIngredient8] = useState(item.ingredient8);
    const [editedIngredient9, setEditedIngredient9] = useState(item.ingredient9);
    const [editedIngredient10, setEditedIngredient10] = useState(item.ingredient10);
    const [editedIngredient11, setEditedIngredient11] = useState(item.ingredient11);
    const [editedIngredient12, setEditedIngredient12] = useState(item.ingredient12);

    const [editedInstructions, setEditedInstructions] = useState(item.instructions);
  
    const dispatch = useDispatch();
    const history = useHistory();

    // const fetchSavedCocktail = () => {
    //     axios.get(`/api/saved_cocktails/${item.id}`)
    //     .then((response) => {
    //       console.log(response.data);
    //       setSavedCocktail(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //   }


    const deleteSaved = () => {
        dispatch({ type: 'DELETE_COCKTAIL_SAGA', payload: {item: item.id}})
        history.push(`/savedlist`);
    }

    const saveChanges = () => {
        dispatch({
          type: 'UPDATE_COCKTAIL_SAGA',
          payload: {
            id: item.id,
            measure1: editedMeasure1,
            ingredient1: editedIngredient1,
            measure2: editedMeasure2,
            ingredient2: editedIngredient2,
            measure3: editedMeasure3,
            ingredient3: editedIngredient3,
            measure4: editedMeasure4,
            ingredient4: editedIngredient4,
            measure5: editedMeasure5,
            ingredient5: editedIngredient5,
            measure6: editedMeasure6,
            ingredient6: editedIngredient6,
            measure7: editedMeasure7,
            ingredient7: editedIngredient7,
            measure8: editedMeasure8,
            ingredient8: editedIngredient8,
            measure9: editedMeasure9,
            ingredient9: editedIngredient9,
            measure10: editedMeasure10,
            ingredient10: editedIngredient10,
            measure11: editedMeasure11,
            ingredient11: editedIngredient11,
            measure12: editedMeasure12,
            ingredient12: editedIngredient12,
            instructions: editedInstructions,
          },
        });
        setEditMode(false);
      }
    
      console.log(item);

    // useEffect(() => {
    //     dispatch({ type: 'OPEN_SAVED_COCKTAIL_SAGA', payload: item.id });
    // }, []);

    // useEffect(() => {
    //     fetchSavedCocktails();
    //   }, []);

    return (
        <div>
            <h2>{item.cocktail_name}</h2>
            <img 
                src={item.image} 
                alt={item.cocktail_name} 
                width="125"
                height="125"
            />
                    {editMode ? ( // Display edit fields if editMode is true
                    <div>
                        <h3>Ingredients:</h3>
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure1}
                            onChange={(e) => setEditedMeasure1(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient1}
                            onChange={(e) => setEditedIngredient1(e.target.value)}
                        />
                        <br/> {/*Begin Row 2 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure2}
                            onChange={(e) => setEditedMeasure2(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient2}
                            onChange={(e) => setEditedIngredient2(e.target.value)}
                        />
                        <br/> {/*Begin Row 3 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure3}
                            onChange={(e) => setEditedMeasure3(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient3}
                            onChange={(e) => setEditedIngredient3(e.target.value)}
                        />
                        <br/> {/*Begin Row 4 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure4}
                            onChange={(e) => setEditedMeasure4(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient4}
                            onChange={(e) => setEditedIngredient4(e.target.value)}
                        />
                        <br /> {/*Begin Row 5 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure5}
                            onChange={(e) => setEditedMeasure5(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient5}
                            onChange={(e) => setEditedIngredient5(e.target.value)}
                        />
                        <br/> {/*Begin Row 6 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure6}
                            onChange={(e) => setEditedMeasure6(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient6}
                            onChange={(e) => setEditedIngredient6(e.target.value)}
                        />
                        <br/> {/*Begin Row 7 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure7}
                            onChange={(e) => setEditedMeasure7(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient7}
                            onChange={(e) => setEditedIngredient7(e.target.value)}
                        />
                        <br/> {/*Begin Row 8 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure8}
                            onChange={(e) => setEditedMeasure8(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient8}
                            onChange={(e) => setEditedIngredient8(e.target.value)}
                        />
                        <br/> {/*Begin Row 9 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure9}
                            onChange={(e) => setEditedMeasure9(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient9}
                            onChange={(e) => setEditedIngredient9(e.target.value)}
                        />
                        <br/> {/*Begin Row 10 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure10}
                            onChange={(e) => setEditedMeasure10(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient10}
                            onChange={(e) => setEditedIngredient10(e.target.value)}
                        />
                        <br/> {/*Begin Row 11 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure11}
                            onChange={(e) => setEditedMeasure11(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient11}
                            onChange={(e) => setEditedIngredient11(e.target.value)}
                        />
                        <br/> {/*Begin Row 12 */}
                        <textarea
                            rows="1"
                            cols="10"
                            value={editedMeasure12}
                            onChange={(e) => setEditedMeasure12(e.target.value)}
                        />
                        <textarea
                            rows="1"
                            cols="18"
                            value={editedIngredient12}
                            onChange={(e) => setEditedIngredient12(e.target.value)}
                        />
                        <br/>
                        <h3>Instructions:</h3>
                        <textarea
                            rows="7"
                            cols="45"
                            value={editedInstructions}
                            onChange={(e) => setEditedInstructions(e.target.value)}
                        />
                        <br />
                        <button onClick={saveChanges}>Save Changes</button>
                        <button onClick={() => setEditMode(false)}>Cancel</button>
                        </div>
                    ) : (
                <div>
                    <h3>Ingredients:</h3>

                    <ul>
                        {item.measure1 && item.ingredient1 && (
                            <li>{item.measure1}  {item.ingredient1}</li>
                        )}
                        {item.measure2 && item.ingredient2 && (
                            <li>{item.measure2}  {item.ingredient2}</li>
                        )}
                        {item.measure3 && item.ingredient3 && (
                            <li>{item.measure3}  {item.ingredient3}</li>
                        )}
                        {item.measure4 && item.ingredient4 && (
                            <li>{item.measure4}  {item.ingredient4}</li>
                        )}
                        {item.measure5 && item.ingredient5 && (
                            <li>{item.measure5}  {item.ingredient5}</li>
                        )}
                        {item.measure6 && item.ingredient6 && (
                            <li>{item.measure6}  {item.ingredient6}</li>
                        )}
                        {item.measure7 && item.ingredient7 && (
                            <li>{item.measure7}  {item.ingredient7}</li>
                        )}
                        {item.measure8 && item.ingredient8 && (
                            <li>{item.measure8}  {item.ingredient8}</li>
                        )}
                        {item.measure9 && item.ingredient9 && (
                            <li>{item.measure9}  {item.ingredient9}</li>
                        )}
                        {item.measure10 && item.ingredient10 && (
                            <li>{item.measure10}  {item.ingredient10}</li>
                        )}
                        {item.measure11 && item.ingredient11 && (
                            <li>{item.measure11}  {item.ingredient11}</li>
                        )}
                        {item.measure12 && item.ingredient12 && (
                            <li>{item.measure12}  {item.ingredient12}</li>
                        )}
                    </ul>
                
                    <br/>
                    <h3>Instructions: </h3>
                    <p>{item.instructions}</p>
                    <br/>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                    <button onClick={deleteSaved}>Remove</button>
                </div>
    )}
        </div>
  );
}

export default SavedItem;