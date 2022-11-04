import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoAPI";
import { cryptoNewsApi } from "../services/newsAPI";

export default configureStore({
    reducer:{[cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,},
    
});
