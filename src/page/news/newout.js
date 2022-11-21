import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyContext from "../../context/MyContext.ts";

export default function NewOut({valorOut, setValorOut, descricaoOut, setDescricaoOut}){

    const navigate = useNavigate();
    const { config } = useContext(MyContext);

    function registrar (e){
        e.preventDefault();

        axios.post('http://localhost:5000/transitions',{
        value: valorOut,
        description: descricaoOut,
        direction: false
    }, config)
    .then(registroSucesso)
    .catch(registroFalha);
    }

    function registroSucesso(resposta){
        navigate("/transitions");
    }

    function registroFalha(err){
        alert(err.response);
    }

    return(
        <ContainerNewOut>
            <p>Nova saída</p>
            <FormNewOut onSubmit={registrar}>
                <input type="number" required placeholder="Digite o valor..." value={valorOut} onChange={e => setValorOut(e.target.value)}/>
                <input type="text" required placeholder="Digite a descrição..." value={descricaoOut} onChange={e => setDescricaoOut(e.target.value)}/>
                <button type='submit'>Salvar saída</button>
            </FormNewOut>
        </ContainerNewOut>
    )
};

const ContainerNewOut = styled.div`
  width: 100%;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
    margin: 35px;
  }
`

const FormNewOut = styled.form`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    width: 326px;
    height: 50px;
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