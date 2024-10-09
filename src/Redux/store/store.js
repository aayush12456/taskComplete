import { configureStore } from "@reduxjs/toolkit";
import passDataSlice from "../Slice/passDataSlice";
const store=configureStore({
    reducer:{
  passData:passDataSlice
    }
})
export default store