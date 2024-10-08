import { legacy_createStore as createStore } from "redux";


export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type IncreamnentAction = {
    type: "INCREMENT";
    payload: number;
}
export type DecrementAction = {
    type: "DECREAMENT";
    payload: number;
}

type KnownAction = IncreamnentAction | DecrementAction;

function reducer(state = 1, action: KnownAction) {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREAMENT":
            return state - action.payload;
    }
}