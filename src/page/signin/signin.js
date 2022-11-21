import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext.ts';
import axios from 'axios';
import { ContainerLogin, FormIn } from '../../styled';


export default function SignIn({email, setEmail, senha, setSenha}) {

  const navigate = useNavigate();
  const {setToken, setUsuario} = useContext(MyContext);

  function logar(e){
    e.preventDefault();
    
    axios.post('http://localhost:5000/sign-in', {
        email: email,
        password: senha,
    }).then(LoginSucesso).catch(loginFalha);
  }

  function LoginSucesso(resposta){
    setToken(resposta.data.token);
    setUsuario({
      token: resposta.data.token,
      name: resposta.data.name
    })
    setEmail("");
    setSenha("");
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
        <FormIn onSubmit={logar}>
          <input type="email" required placeholder="Digite o seu email..." value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" required placeholder="Digite a sua senha..." value={senha} onChange={e => setSenha(e.target.value)}/>
          <button type='submit'>Entrar</button>
        </FormIn>
        <Link to={"/sign-up"}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </ContainerLogin>
    );
}