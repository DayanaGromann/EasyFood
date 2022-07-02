import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import '../css/Login.css'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const {signIn} = UserAuth();

  const handleSubmit = async(e) => {
    e.preventDefault(); //cancela o evento, sem parar a propagação do mesmo
    setError('')
    try{
      await signIn(email, password);
      navigate('/dashboard')
    }
    catch(e){
      setError(e.message)
      console.log(e.message)
    }
  }
  return (
    <div>
        
          
       
        <form className= 'form' onSubmit={handleSubmit}>
        <h1>Entre com suas credenciais</h1> 
            <div>
                <label>E-mail</label>
                <input className="input" onChange={(e) => setEmail(e.target.value)} type="email"/>
            </div>
            <div>
                <label>Senha</label>
                <input className="input" onChange={(e)=>setPassword(e.target.value)} type="password"/>
            </div>
            <button>Entrar</button>
        </form>
    </div>
    
  )
}

export default Login