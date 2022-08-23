import { configureStore } from '@reduxjs/toolkit';
import formReducer from './features/slice';

const store = configureStore({
    reducer: {
        formReducer
    }
})

export default store;