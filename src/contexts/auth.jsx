import React, {useState, useEffect, createContext} from "react";

import { useNavigate } from "react-router-dom";

import {api, createSession, createAccont} from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [usuarioLogado, setUsuarioLogado] = useState('');

    useEffect(() => {
        const recoveredUsers = localStorage.getItem("usuario");

        if (recoveredUsers){
            let usuario = JSON.parse(recoveredUsers)
            setUser(usuario.email);
            setUsuarioLogado(usuario.email);
        }

        setloading(false);
    }, []);


    const cadastro = async (email, password) => {
        const response2 = await createAccont(email, password);

        console.log("Confirme sua Senha", response2.data);
        
        const createdUser = response2.data.email;
       
        setUser(createdUser);
        navigate("/");
        alert('Conta Criada com sucesso!')
    
    };
    
    const login = async (email, password) => {
        const response = await createSession(email, password);

        console.log("login", response.data);
        
        const loggedUser = response.data.email;
        const token = response.data.userid;
    
        const usuario ={
            email: loggedUser,
            token: token
        }

        setUsuarioLogado(usuario.email);
   
        localStorage.setItem("usuario", JSON.stringify(usuario));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        navigate("/");
    
    };
    
    const logout = () => {
        console.log("logout");
        localStorage.removeItem("usuario");
        
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    };

    return (
    <AuthContext.Provider 
            value={{authenticated: !!user, user, loading, login, logout, cadastro, usuarioLogado}}>
            {children}
    </AuthContext.Provider>
    )
}