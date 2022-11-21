import axios from "axios";
import React,{ useContext, useEffect, useState } from "react";
import MyContext from "../../context/MyContext.ts";
import { ContainerCarregamento, ContainerList, Li, Saldo } from "../../styled";

export default function ListTransitions(){

    const { config } = useContext(MyContext);
    const [transitions, setTransitions] = useState();
    const [saldo, setSaldo] = useState(0);
    const [negative, setNegative] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/transitions',config)
        .then(listSucess)
        .catch(listErr)

        function listSucess(resposta){
            setTransitions(resposta.data);
            console.log("Deu certo!", resposta.data);
            saldoAtual(resposta.data);
        }
    
        function listErr(err){
            console.log("Deu ruim!", err);
        }
        
    },[]);

    function saldoAtual (list){

        let novoSaldo = 0;

        for(let i = 0; i < list.length; i++){
            if (list[i].direction){
                novoSaldo = novoSaldo + parseInt(list[i].value);
            }else{
                novoSaldo = novoSaldo - parseInt(list[i].value);
            }
        }

        if(novoSaldo < 0){
            setNegative(true);
        }else{
            setNegative(false);
        }

        console.log(novoSaldo);
        setSaldo(novoSaldo);
    }

    if(transitions === undefined){
        return(<ContainerCarregamento><img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"/></ContainerCarregamento>)
    }

    return (
        <ContainerList>
            {transitions.map((t,index) => 
                <Li positive={t.direction} key={index}>
                    <h1>{t.date}</h1>
                    <h2>{t.description}</h2>
                    <h3>R${t.value}</h3>
                </Li>
            )}
            <Saldo negative={!negative}>
                <p>Saldo</p>
                <h1>R${saldo}</h1>
            </Saldo>
        </ContainerList>
    )
}