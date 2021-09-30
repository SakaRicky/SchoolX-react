import React, { createContext, useReducer, useContext } from 'react';
import { initialState, studentReducer } from './StudentReducer';

const StudentContext = createContext()

export const StudentProvider = ({children}) => {
    const [state, dispatch] = useReducer(studentReducer, initialState);
    
    return <StudentContext.Provider value={{studentState:state, studentDispatch: dispatch}}>
        {children}
    </StudentContext.Provider>
}

export const useStudentState = () => {
    return useContext(StudentContext)
}