import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* savedItemSaga() {
    yield takeLatest('OPEN_SAVED_COCKTAIL_SAGA', savedItem)
}

function* savedItem(action) {
    try {
        const response = yield axios.get(`/api/saved_cocktails/${action.payload}`);
        console.log('Here is the response data', response.data);
        yield put({ type: 'SET_SAVED_COCKTAIL', payload: response.data });
	} catch (error) {
		console.log('Error in savedItem saga:', error);
	}
}

export default savedItemSaga;