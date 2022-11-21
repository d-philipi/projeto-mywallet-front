import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext.ts";
import { ContainerNewIn, FormNewIn } from "../../styled";

export default function NewIn({valorIn, setValorIn, descricaoIn, setDescricaoIn}){

    const navigate = useNavigate();
    const { config } = useContext(MyContext);

    function registrar (e){
        e.preventDefault();
        const novaTransicao = {
          value: valorIn,
          description: descricaoIn,
          direction: true
        }
        axios.post('http://localhost:5000/transitions',novaTransicao, config)
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
        <ContainerNewIn>
            <p>Nova entrada</p>
            <FormNewIn onSubmit={registrar}>
                <input type="number" required placeholder="Digite o valor..." value={valorIn} onChange={e => setValorIn(e.target.value)}/>
                <input type="text" required placeholder="Digite a descrição..." value={descricaoIn} onChange={e => setDescricaoIn(e.target.value)}/>
                <button type='submit'>Salvar entrada</button>
            </FormNewIn>
        </ContainerNewIn>
    )
}