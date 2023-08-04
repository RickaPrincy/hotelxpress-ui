import { createContext, useState }  from "react";

export const UserInfo = createContext();

function UserInformation({children}) {
    const [user, setUser] = useState(undefined);
    
    const toggleUser = (values)=>{
        setUser(values);
    }

    return ( 
        <UserInfo.Provider value={{user, toggleUser}}>
            {children}
        </UserInfo.Provider>
    );
}

export default UserInformation;