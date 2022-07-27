import React,{createContext,useState,useContext} from 'react';
import { useLocalStorage } from '../useLocalStorage'
import { makePerson } from '../../utilities/makePerson';
 
const DataContext = createContext();

export const AuthProvider = ({children})=>{
  const [isMockMode,setIsMockMode] = useLocalStorage({key:"@POLARIS:isMockMode",initialValue:true})

  DataContext.displayName = "AuthContext";

  const [user,setUser] = useState();

  const handleSignIn = ({email,password})=>{
    console.log({email,password});
    let userData;
    if(isMockMode){
      [userData] = makePerson()
    }else{
      alert(`WIP: ${email} ${password}`)
    }
    setUser(userData)
  }

  return(
    <DataContext.Provider value={{
      user,
      handleSignIn,
      setIsMockMode,
      isMockMode
    }}
    >
      {children}
    </DataContext.Provider>
  )
  
}

export const useAuth = () =>{
  const context = useContext(DataContext)
  if(!context) throw new Error('useAuth must be used within an AuthProvider')
  return context;
}