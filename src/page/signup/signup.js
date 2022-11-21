import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


export default function SignUp({email, setEmail, senha, setSenha, nome, setNome, checkSenha, setCheckSenha}) {

  const navigate = useNavigate();

  function cadastrar(e){
    e.preventDefault();
    
    axios.post('http://localhost:5000/sign-up', {
            email: email,
            name: nome,
            password: senha,
            confirmedPassword: checkSenha
        }).then(CadastroSucesso).catch(cadastroFalha)
  }

  function CadastroSucesso(resposta){
    setEmail("");
    setSenha("");
    setNome("");
    setCheckSenha("");
    navigate('/');
  }

  function cadastroFalha(erro){
      alert(erro.response.data.message);
  }

    return (
      <ContainerCadastro>
        <h1>
          MyWallet
        </h1>
        <Form onSubmit={cadastrar}>
          <input type="text" required placeholder="Digite o seu nome..." value={nome} onChange={e => setNome(e.target.value)}/>
          <input type="email" required placeholder="Digite o seu email..." value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" required placeholder="Digite a sua senha..." value={senha} onChange={e => setSenha(e.target.value)}/>
          <input type="password" required placeholder="Confirme sua senha..." value={checkSenha} onChange={e => setCheckSenha(e.target.value)}/>
          <button type='submit'>Entrar</button>
        </Form>
        <Link to={"/"}>
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </ContainerCadastro>
    );
}

const ContainerCadastro = styled.div`
  width: 100%;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
  }
  p{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
  }
`

const Form = styled.form`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border: 1px solid #FFFFFF;
  }
  button{
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    margin: 5px;
    cursor:pointer;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    border: 1px solid #A328D6;
  }
`