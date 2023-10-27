import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useSelector, useDispatch } from 'react-redux';

function* searchNameSaga() {
    yield takeLatest('SEARCH_INGREDIENT_SAGA', search)
}

//const searchQuery = useSelector(store => store.searchReducer)

function* search(action) {
    
    try {
        const response = yield axios.post('/search_by_name', {search: action.payload});
        yield put({ type: 'SEARCH_RESULTS', payload: response.data.drinks});
	} catch (error) {
		console.log('Error in search saga:', error);
	}
}

export default searchNameSaga;