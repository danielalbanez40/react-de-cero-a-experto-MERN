import { useState } from "react"
import UserContext from "./UserContext"

// const user =  {
//     id: 123,
//     name: 'Daniel',
//     email: 'daniel@daniel.com'
// }

const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState()


  return (
    <UserContext.Provider value={{user, setUser}
      // {hola:'Mundo', user}
      }>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider