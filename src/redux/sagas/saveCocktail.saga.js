import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveCocktailSaga() {
    yield takeLatest('SAVE_COCKTAIL_SAGA', saveCocktail)
}

function* saveCocktail(action) {
    try {
        yield axios.post('api/saved_cocktails', action.payload);
        console.log(action.payload);
        // yield put({ type: '', payload: response.data.drinks});
	} catch (error) {
		console.log('Error in saveCocktail saga:', error);
	}
}

export default saveCocktailSaga;