import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, State } from "../types/state";

//Мы можем считывать данные из хранилища с помощью useSelector
const useAppDispatch = () => useDispatch<AppDispatch>();
//отправлять действия с помощью useDispatch
const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export {useAppDispatch, useAppSelector};