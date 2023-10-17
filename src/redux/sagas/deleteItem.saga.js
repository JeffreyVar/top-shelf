import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItemSaga() {
    yield takeLatest('DELETE_COCKTAIL_SAGA', deleteItem)
}

function* deleteItem(action) {
    try {
        const response = yield axios.delete(`/api/saved_cocktails/${action.payload.item}`);
        
        // yield put({ type: '', payload: response.data.drinks});
	} catch (error) {
		console.log('Error in delete item saga:', error);
	}
}

export default deleteItemSaga;