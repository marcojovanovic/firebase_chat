import React,{useReducer, createContext} from 'react'
 
import {reducer} from './reducer'
 
  
const initialState = {num:10} // \ reducer
 
export const AppContext = createContext()
 
const AppProvider = ({children}) => {
 
  const [state, dispatch]=useReducer(reducer, initialState)


  const increaseNum = () =>{

    dispatch({type:'INCREASING_NUM_VALUE'})


  }

  return (
    <AppContext.Provider
     
		 value={{...state, increaseNum}}
    >
      {children}
    </AppContext.Provider>
  )
}
 
 
export {AppProvider}