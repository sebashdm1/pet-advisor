import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
    toggleIntro: true,
    isLoggin: false,
    isRegistered: false,
    user: {},
    modal: {
        visible: false,
        body: '',
        toggle: () => {}
    }, 
    loading: {
        visible: false,
        toggle: () => {}
    }
};

export const NAME_ACTION = {
    SET_TOGGLE: 'SET_TOGGLE',
    SET_LOGGIN: 'SET_LOGGIN',
    SET_REGISTERED: 'SET_REGISTERED',
    SET_USER: 'SET_USER',
    SET_MODAL: 'SET_MODAL',
    SET_LOADING: 'SET_LOADING'
}

const globalReducer = (state, action) => {
    switch (action.type) {
        case NAME_ACTION.SET_TOGGLE:
            return {
                ...state,
                toggleIntro: action.payload
            };
        case NAME_ACTION.SET_LOGGIN:
            return {
                ...state,
                isLoggin: action.payload
            };
        case NAME_ACTION.SET_REGISTERED:
            return {
                ...state,
                isRegistered: action.payload
            };
        case NAME_ACTION.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case NAME_ACTION.SET_MODAL:
            return {
                ...state,
                modal: action.payload
            }
        case NAME_ACTION.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
    }
}

const GlobalContext = createContext();

export function StateProvider({ children }) {
    const [state, dispatch] = useReducer(globalReducer, initialState)
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            { children}
        </GlobalContext.Provider>
    );
}

export function useGlobalState() {
    return useContext(GlobalContext)
}
