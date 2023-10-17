import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* searchNameSaga() {
    yield takeLatest('SEARCH_NAME_SAGA', search)
}

function* search(action) {
    try {
        const response = yield axios.post('/search_by_name', {search: action.payload});
        yield put({ type: 'SEARCH_RESULTS', payload: response.data.drinks});
	} catch (error) {
		console.log('Error in search saga:', error);
	}
}

export default searchNameSaga;