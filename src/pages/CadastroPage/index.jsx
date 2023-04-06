import React, {useState, useContext} from 'react';
import LogoOnPharma from '../../assets/OnPharma-Logo.png';
import '../../styles.css';
import { AuthContext } from '../../contexts/auth';
import Modal from 'react-modal';
import { redirect } from 'react-router-dom';

Modal.setAppElement('#root');

const CadastroPage = () => {
    const { cadastro } = useContext(AuthContext);

    const [email, setEmail]                     = useState("");
    const [password, setPassword]               = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [modalIsOpen, setIsOpen]              = useState(false);
    
       // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

    // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }

 

  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("submit", {email, password});

      if(password !== confirmPassword){
        alert("Senhas não conferem");
        return;
      }

      cadastro(email, password);  //integracao com o contexto/api
    };

   

    return (
            <div  className = "container">
            <div  className = "container-login">
            <div  className = "wrap-login">
            <form className = "login-form" onSubmit = {handleSubmit}>
            <span className = "login-form-title">Crie Seu Cadastro!</span>
            <span className = "login-form-title">
            <img  src       = {LogoOnPharma} alt    = ""/></span>
            <div className = "wrap-input">
                <input required
                 className = {email !== "" ? 'has-val input' : 'input' }
                 type      = "email"
                 value     = {email}
                 onChange  = {(e) => setEmail(e.target.value)}
                 />
                <span className = "focus-input" data-placeholder = 'Email'></span>
            </div>
  
            <div className = "wrap-input">
                <input required
                className = {password !== "" ? 'has-val input' : 'input' }
                type      = "password"
                value     = {password}
                onChange  = {(e) => setPassword(e.target.value)}
                />
                <span className = "focus-input" data-placeholder = 'Senha'></span>
            </div>

            <div className = "wrap-input">
                <input required
                className = {confirmPassword !== "" ? 'has-val input' : 'input' }
                type      = "password"
                value     = {confirmPassword}
                onChange  = {(e) => setConfirmPassword(e.target.value)}
                
                />
                <span className = "focus-input" data-placeholder = 'Confirme sua Senha'></span>
            </div>
            <div className = 'container-login-form-btn'>  </div>
              
            <button className = "login-form-btn" onClick = {abrirModal} >Criar Conta</button>
            <Modal
                  isOpen         = {modalIsOpen}
                  onRequestClose = {fecharModal}
                  contentLabel="Modal de exemplo"
                  className='modal'
                  overlayClassName='modal-overlay'
                  closeTimeoutMS={200}
                  >
                  
                  <h2 className='titulomodal'>Termo de Uso - OnPharma</h2>
                  <br/>
              <div className = 'textoModal'>Este Termo de Uso descreve os termos e condições gerais de uso do OnPharma, desenvolvido pela empresa responsável pelo serviço. Ao utilizar o Serviço, você concorda com este Termo e com a Política de Privacidade do OnPharma, disponível em <a href='https://docs.google.com/document/d/1SvVcxYthDL8E0y8hfolb3e_7KLWLWTY3LysMYGWKj-U/edit?usp=sharing' target='_blank' >Termo Política de Privacidade</a>.
                  <br />
                  <a href='http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target='_blank' >Confira o documento da Lei LGPD</a>
                  <br />
                  <br />
                <p className='titulomodal'><strong>Tratamento de Dados Pessoais </strong></p> 
                <br/>
                <p>1.1. A Empresa coleta e trata dados pessoais do Usuário para possibilitar o acesso e utilização do Serviço, incluindo, mas não se limitando a, nome, e-mail e senha. Esses dados são coletados e tratados com base no consentimento do Usuário, de acordo com a LGPD.</p> 

              <p> 1.2. A Empresa se compromete a utilizar os dados pessoais do Usuário apenas para as finalidades previstas neste Termo e na Política de Privacidade, respeitando os princípios da finalidade, adequação, necessidade, livre acesso, transparência, segurança, prevenção, não discriminação e responsabilização.</p>

              <p> 1.3. A Empresa adota medidas de segurança adequadas para proteger os dados pessoais do Usuário contra acessos não autorizados, perda, destruição, alteração ou divulgação indevida.</p>

              <p>1.4. O Usuário tem o direito de acessar, corrigir, atualizar e excluir seus dados pessoais, bem como de revogar seu consentimento para o tratamento de dados, conforme previsto na LGPD.</p> 
              <br />
              <p className='titulomodal'><strong>Propriedade Intelectual</strong> </p> 
              <br />
              <p> 2.1. O Serviço e seus conteúdos, incluindo, mas não se limitando a, textos, imagens, gráficos, logotipos, marcas, programas de computador, códigos fonte e objetos de banco de dados, são de propriedade exclusiva da Empresa e estão protegidos pelas leis de propriedade intelectual aplicáveis.</p>

              <p>2.2. É proibido ao Usuário copiar, reproduzir, modificar, distribuir, transmitir, exibir, publicar ou criar obras derivadas a partir do Serviço e de seus conteúdos, sem a prévia autorização expressa da Empresa.</p> 

              <p>Disposições Gerais</p> 
              <p>3.1. Este Termo poderá ser atualizado pela Empresa a qualquer momento, mediante aviso prévio ao Usuário.</p> 

              <p>3.2. Este Termo é regido pelas leis brasileiras e quaisquer disputas decorrentes do seu uso serão submetidas ao foro da comarca em que a Empresa está sediada.</p> 
              <br />
              <p className='titulomodal'> <strong>Ao clicar no botão "Aceitar" ou utilizar o Serviço, o Usuário declara ter lido, entendido e concordado com este Termo e com a Política de Privacidade do OnPharma. </strong></p> 
              
              <div className='text-center'>
                <span className = "txt1"></span>
                      <a className='login-form-btn-modal' href='http://localhost:3000/login'> CONCORDO </a>
                      <button className = "login-form-btn-modal" onClick = {fecharModal}>Fechar</button>
              </div>
              <br />
               
              </div>
            </Modal>
            </form>
          </div>
        </div>
    </div>
    );
};


export default CadastroPage;
