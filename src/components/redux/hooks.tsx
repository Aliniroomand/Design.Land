import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import { store, type AppDispatch , type RootState} from "./store/store";


export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;