import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import saveCocktailSaga from './saveCocktail.saga';
import updateCocktailSaga from './updateCocktail.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    saveCocktailSaga(),
    updateCocktailSaga(),
  ]);
}
