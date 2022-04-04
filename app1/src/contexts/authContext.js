import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [cookie] = useCookies(['token']);
    const [auth, setAuth] = useState({});
    useEffect(()=>{
        if(cookie.token){
            console.log("fetch");
            fetch("http://localhost:5000/appuser/refresh_token",
            {
                method: 'post', 
                credentials:'include'     //?sert a envoyé le cookie en tant que credentials.
            })
            .then(response => {
                if( response.status === 200){
                    return response.json();
                }
                else{
                    return "error";
                }
            })
            .then((jsonData) => {
                console.log("réponse app update token ", jsonData);
                //let result;
                if (jsonData.id) {
                    let temp = 
                    {                  
                            "id": jsonData.id,
                            "role": jsonData.role,
                            "email":jsonData.email                       
                    }
                    setAuth(temp);
                }
            }).catch(console.log);
        }
    },[cookie])
  
    return (
      <AuthContext.Provider value={{auth, setAuth}}>
        {children}
      </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};