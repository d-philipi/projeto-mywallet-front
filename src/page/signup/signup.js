import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ContainerCadastro, FormUp } from '../../styled';


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
        <FormUp onSubmit={cadastrar}>
          <input type="text" required placeholder="Digite o seu nome..." value={nome} onChange={e => setNome(e.target.value)}/>
          <input type="email" required placeholder="Digite o seu email..." value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" required placeholder="Digite a sua senha..." value={senha} onChange={e => setSenha(e.target.value)}/>
          <input type="password" required placeholder="Confirme sua senha..." value={checkSenha} onChange={e => setCheckSenha(e.target.value)}/>
          <button type='submit'>Entrar</button>
        </FormUp>
        <Link to={"/"}>
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </ContainerCadastro>
    );
}
