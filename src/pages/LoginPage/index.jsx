import React, {useState, useContext} from 'react';
import LogoOnPharma from '../../assets/OnPharma-Logo.png';
import '../../styles.css';
import { AuthContext } from '../../contexts/auth';

const LoginPage = () => {
    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("submit", {email, password});

      login(email, password); //integracao com o contexto/api
    };

    return (
    <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleSubmit}>
              <span className="login-form-title">Bem Vindo!</span>
              <span className="login-form-title">
                <img src={LogoOnPharma} alt=""/>
              </span>
  
              <div className="wrap-input">
                <input required
                 className={email !== "" ? 'has-val input' : 'input' }
                 type="email" 
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)}
                 />
                <span className="focus-input" data-placeholder='Email'></span>
              </div>
  
              <div className="wrap-input">
                <input required
                className={password !== "" ? 'has-val input' : 'input' }
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
                <span className="focus-input" data-placeholder='Password'></span>
              </div>
  
              <div className='container-login-form-btn'>
                <button className="login-form-btn">Login</button>
              </div>
  
              <div className='text-center'>
                <span className="txt1">Nao possui conta?</span>
                <a className='txt2' href='http://localhost:3000/cadastro'>Criar conta.</a>
              </div>
  
            </form>
          </div>
        </div>
    </div>
    );
};


export default LoginPage;
