import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateCocktailSaga() {
    yield takeLatest('UPDATE_COCKTAIL_SAGA', updateCocktail)
}

function* updateCocktail(action) {
    try {
        const { id, editedCocktail } = action.payload;
        console.log(id);
        yield axios.put(`api/saved_cocktails/${id}`, editedCocktail);
        
        // yield put({ type: '', payload: response.data.drinks});
	} catch (error) {
		console.log('Error in updateCocktail saga:', error);
	}
}

export default updateCocktailSaga;