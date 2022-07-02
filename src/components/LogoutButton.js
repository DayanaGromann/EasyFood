import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Logout = ()=>{
    const {user,logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await logout();
            navigate('/');
        }
        catch(e){
            console.log(e.message);
        }
    }

    
    return(  
        <>
        <text>Você tem certeza que deseja sair da conta?</text>
        <button onClick = {handleLogout} color = "white">Desconectar</button>
        </>
    )
}

export default Logout