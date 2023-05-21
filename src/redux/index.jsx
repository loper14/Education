import { configureStore } from "@reduxjs/toolkit";
import Slice from "./slices/slice";

export default configureStore({
  reducer: {
    data: Slice,
  },
});
