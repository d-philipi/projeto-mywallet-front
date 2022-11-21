import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyContext from '../../context/MyContext.ts';
import axios from 'axios';


export default function SignIn({email, setEmail, senha, setSenha}) {

  const navigate = useNavigate();
  const {token, setToken} = useContext(MyContext);

/*  useEffect(()=>{
    if (token != undefined){
      console.log(token)
      navigate('/transitions');
    }
},[]);*/

  function logar(e){
    e.preventDefault();
    
    axios.post('http://localhost:5000/sign-in', {
        email: email,
        password: senha,
    }).then(LoginSucesso).catch(loginFalha);
  }

  function LoginSucesso(resposta){
    setToken(resposta.data.token);
    navigate('/transitions');
  }

  function loginFalha(erro){
      alert(erro.response);
  }

    return (
      <ContainerLogin>
        <h1>
          MyWallet
        </h1>
        <Form onSubmit={logar}>
          <input type="email" required placeholder="Digite o seu email..." value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" required placeholder="Digite a sua senha..." value={senha} onChange={e => setSenha(e.target.value)}/>
          <button type='submit'>Entrar</button>
        </Form>
        <Link to={"/sign-up"}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </ContainerLogin>
    );
}

const ContainerLogin = styled.div`
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
  height: 200px;
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