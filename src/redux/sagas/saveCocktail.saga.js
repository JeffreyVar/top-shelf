import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* saveCocktailSaga() {
    yield takeLatest('SAVE_COCKTAIL_SAGA', saveCocktail)
}

function* saveCocktail(action) {
    try {
        yield axios.post('api/saved_cocktails', action.payload);
        console.log(action.payload);
	} catch (error) {
		console.log('Error in saveCocktail saga:', error);
	}
}

export default saveCocktailSaga;