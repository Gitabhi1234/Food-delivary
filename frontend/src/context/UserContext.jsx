import React from 'react'
import UserDataContext from './UserDataContext';

const UserContext= ({children}) => {
    const user = {
        fullName:{
            firstName:'',
            lastName:''
        },
        email:'',
    }
    return (
        <div>
           <UserDataContext.Provider value={user}>
                {children}
           </UserDataContext.Provider>
        </div>
    )
}

export default UserContext;