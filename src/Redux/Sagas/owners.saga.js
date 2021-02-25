import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchBoth() {
    const ownerResponse = yield axios.get('/owners');
    yield put({ type: 'STORE_OWNERS', payload: ownerResponse.data });
    const petResponse = yield axios.get('/pets');
    yield put({ type: 'STORE_PETS', payload: petResponse.data });
}


function* fetchOwners() {
    try {
        console.log('getting owners');

        const response = yield axios.get('/owners');
        console.log('response', response);
        yield put({ type: 'STORE_OWNERS', payload: response.data });

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
        yield axios.delete(`/owners/${action.payload}`);
        yield put({ type: 'FETCH_OWNERS' });

    } catch (err) {
        console.log(err);
    }
}

function* ownersSaga() {
    yield takeEvery('FETCH_OWNERS', fetchOwners);
    yield takeEvery('ADD_OWNER', addOwner);
    yield takeEvery('DELETE_OWNER', deleteOwner);
    yield takeEvery('FETCH_BOTH', fetchBoth);
}

export default ownersSaga;