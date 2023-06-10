import React, { Dispatch, SetStateAction} from "react";

export const UserContext = React.createContext({
    authenticated: '',
    tasks:[]
});

export const UserProvider = UserContext.Provider;

export const UserConsumer = UserContext.Consumer;

