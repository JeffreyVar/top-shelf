import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* cocktailItemSaga() {
    yield takeLatest('COCKTAIL_ITEM_SAGA', cocktailItem)
}

function* cocktailItem(action) {
    try {
        const response = yield axios.post(`/api/cocktails/${action.payload}`);
        console.log(action.payload);
        console.log(response.data.drinks[0]);
        yield put({ type: 'SET_COCKTAIL', payload: response.data.drinks[0]});
	} catch (error) {
		console.log('Error in cocktail item saga:', error);
	}
}

export default cocktailItemSaga;