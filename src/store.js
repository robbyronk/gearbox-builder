import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer: reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(sagaMiddleware),
    }
)

sagaMiddleware.run(rootSaga)

export default store;
