import {takeEvery} from 'redux-saga/effects';
import {calculateGears} from "../reducers/gears";
import {doCalculateGears} from "./gears";

function* rootSaga() {
    console.log('rootSaga started');

    yield takeEvery(calculateGears().type, doCalculateGears)
}

export default rootSaga;
