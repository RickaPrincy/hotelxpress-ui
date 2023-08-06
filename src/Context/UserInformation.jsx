import { createContext, useState }  from "react";

export const UserInfo = createContext();

function UserInformation({children}) {
    const [user, setUser] = useState(undefined);
    
    const toggleUser = (values)=>{
        setUser(values);
    }

    const isAdmin = ()=>{
        return user && user.id_user_type === 2;
    }

    return ( 
        <UserInfo.Provider value={{user, toggleUser,isAdmin}}>
            {children}
        </UserInfo.Provider>
    );
}

export default UserInformation;