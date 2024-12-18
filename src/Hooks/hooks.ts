import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Types/state";

//Мы можем считывать данные из хранилища с помощью useSelector
const useAppDispatch = () => useDispatch<AppDispatch>();
//отправлять действия с помощью useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {useAppDispatch, useAppSelector};