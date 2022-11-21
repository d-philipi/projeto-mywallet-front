import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext.ts";
import { ContainerNewOut, FormNewOut } from "../../styled";

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
}