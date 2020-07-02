import React, {
    createContext,
    useReducer
} from "react";

// utilities

let SessionContext = createContext();

let initialState = {
    menu: {
        open: false,
        toggleMenu: () => {}
    }
};

// allow dispatch actions to update state
let reducer = (state, action) => {
    switch (action.type) {
        // start session
        case "start-session":
            return {
                ...state,
            }

        // open or close menu
        case "toggle-menu":
            return {
                ...state,
                menu: {
                    open: !state.menu.open
                }
            }

        default:
            return {
                ...initialState
            };
    }
};

const SessionContextProvider = (props) => {
    let [ state, dispatch ] = useReducer(reducer, initialState);
    let value = { state, dispatch };
    return (
        <SessionContext.Provider value={value}>
            { props.children }
        </SessionContext.Provider>
    );
};

let SessionContextConsumer = SessionContext.Consumer;

export { SessionContext, SessionContextProvider, SessionContextConsumer };