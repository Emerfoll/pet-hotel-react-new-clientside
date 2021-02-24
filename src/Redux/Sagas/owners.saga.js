import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchOwners() {
    try {
        const response = yield axios.get('/owners');
        yield put({ type: 'STORE_OWNERS', payload: response.data.rows });

    } catch (err) {
        console.log(err);
    }
}

function* addOwner(action) {

    try {
        yield axios.post('/owners', action.payload);
        yield put({ type: 'FETCH_OWNERS' });

    } catch (err) {
        console.log(err);
    }
}

function* deleteOwner(action) {
    try {
        yield axios.delete(`/owners/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_OWNERS' });

    } catch (err) {
        console.log(err);
    }
}

function* ownersSaga() {
    yield takeEvery('FETCH_OWNERS', fetchOwners);
    yield takeEvery('ADD_OWNER', addOwner);
    yield takeEvery('DELETE_OWNERS', deleteOwner);
}

export default ownersSaga;