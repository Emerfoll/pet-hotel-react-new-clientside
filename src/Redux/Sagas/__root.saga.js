import { all } from 'redux-saga/effects';
import petsSaga from './pets.saga';

export default function* rootSaga() {
    yield all([
        petsSaga()
    ]);
}