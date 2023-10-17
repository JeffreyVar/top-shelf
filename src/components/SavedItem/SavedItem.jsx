import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function SavedItem() {
    const item = useSelector(store => store.savedItemReducer)
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();
    const history = useHistory();

    const deleteSaved = () => {
        dispatch({ type: 'DELETE_COCKTAIL_SAGA', payload: {item: item.id}})
        history.push(`/savedlist`);
    }

    return (
        <div>
            <h2>{item.cocktail_name}</h2>
            <img 
                src={item.image} 
                alt={item.cocktail_name} 
                width="125"
                height="125"
            />
            <h3>Ingredients:</h3>
            <ul>
                {item.measure1 && item.ingredient1 && (
                    <li>{item.measure1} {item.ingredient1}</li>
                )}
                {item.measure2 && item.ingredient2 && (
                    <li>{item.measure2} {item.ingredient2}</li>
                )}
                {item.measure3 && item.ingredient3 && (
                    <li>{item.measure3} {item.ingredient3}</li>
                )}
                {item.measure4 && item.ingredient4 && (
                    <li>{item.measure4} {item.ingredient4}</li>
                )}
                {item.measure5 && item.ingredient5 && (
                    <li>{item.measure5} {item.ingredient5}</li>
                )}
                {item.measure6 && item.ingredient6 && (
                    <li>{item.measure6} {item.ingredient6}</li>
                )}
                {item.measure7 && item.ingredient7 && (
                    <li>{item.measure7} {item.ingredient7}</li>
                )}
                {item.measure8 && item.ingredient8 && (
                    <li>{item.measure8} {item.ingredient8}</li>
                )}
                {item.measure9 && item.ingredient9 && (
                    <li>{item.measure9} {item.ingredient9}</li>
                )}
                {item.measure10 && item.ingredient10 && (
                    <li>{item.measure10} {item.ingredient10}</li>
                )}
                {item.measure11 && item.ingredient11 && (
                    <li>{item.measure11} {item.ingredient11}</li>
                )}
                {item.measure12 && item.ingredient12 && (
                    <li>{item.measure12} {item.ingredient12}</li>
                )}
            </ul>
            <br/>
            <h3>Instructions: </h3>
            <p>{item.instructions}</p>
            <br/>
            <button onClick={deleteSaved}>Remove</button>
        </div>
    )
}

export default SavedItem;