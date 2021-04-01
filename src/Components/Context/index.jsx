import React from 'react';

const CounterContext = React.createContext();

export const Provider = CounterContext.Provider;
export const Consumer = CounterContext.Consumer;
