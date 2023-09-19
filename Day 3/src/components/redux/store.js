import { configureStore } from "@redux/toolkit";
import { UserSlice } from "./UserSlice";

export default configureStore ({
    reducer:{
        user: UserSlice.reducer
    }
})