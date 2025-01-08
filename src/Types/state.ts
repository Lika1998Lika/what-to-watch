import { store } from "../Store";

//работа с конкретным объектом хранилища, который содержит информ. о всех ключах и т.д
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

