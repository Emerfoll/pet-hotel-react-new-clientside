import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchPets() {
    try {
        const response = yield axios.get('/pets');
        yield put({ type: 'STORE_PETS', payload: response.data });
    } catch (err) {
        console.log(err);
    }

}

function* addPet(action) {
    try {
        yield axios.post('/pets', action.payload);
        yield put({ type: 'FETCH_PETS' });
    } catch (err) {
        console.log(err);
    }
}

function* deletePet(action) {
    try {
        yield axios.delete(`/pets/${action.payload.id}`);
        yield put({ type: 'FETCH_PETS' });
    } catch (err) {

    }
}

function* editPet(action) {
    try {
        yield axios.put(`/pets/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_PETS' });
    } catch (err) {

    }
}

export default function* petsSaga() {
    yield takeEvery('FETCH_PETS', fetchPets);
    yield takeEvery('ADD_PET', addPet);
    yield takeEvery('DELETE_PET', deletePet);
    yield takeEvery('EDIT_PET', editPet);
}