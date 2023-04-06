import React, {useContext} from "react";
import {AuthContext} from "../../contexts/auth";


const HomePage = () =>{
    const {logout, usuarioLogado} = useContext(AuthContext);
    
    const handleLogout = () => {
        logout();
    }

    return (
    <>
            
            <div className="divTitulo">
        <header className="titulo"> OnPharma Home </header>
    </div>
    <div className="conteudo">
        <div >
        <img  src="https://drive.google.com/uc?id=1er4vntw_JRinX7-5xY7fac6oZfMK0RDq" alt="Logotipo" className="img-item"/> 
        </div>
        <p> Bem vindo <strong>{usuarioLogado}</strong>  <br/> 
            Ao Aplicativo que vai mudar o jeito de comprar seu medicamento 🥰 </p>
        <div className="divMaster">   
            <div className="card"> 
                    <img className="img-button" src="https://drive.google.com/uc?id=1Xw-ichD_UzKQ4M0mXmoGm-TLsqqfHhOr"/>
                    <p className="tituloButton"> Medicamentos com receita</p>
            </div>
            <div className="card">  
                    <img className="img-button" src="https://drive.google.com/uc?id=1T60yQyGs-Jgmv5nDvsTiS7E0_tY28d-e"/>
                    <p className="tituloButton"> Medicamentos Sem Receita</p>
            </div>
            <div className="card">  
                    <img className="img-button" src="https://drive.google.com/uc?id=11sgvvi6SAC1um3Xe_V3ced0561dNDKH8"/>
                    <p className="tituloButton"> Perfumaria </p>
            </div >
            <div className="card">  
                    <img className="img-button" src="https://drive.google.com/uc?id=1Afhol3vBCK2PWT68ev6BMR0BmPzF8KYy"/>
                    <p className="tituloButton"> Farmacias Locais Mais Proximas</p>
                    </div>
                <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
    </div>
      
    </>
    )
};

export default HomePage;
