import axios from "axios";
import React,{ useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MyContext from "../../context/MyContext.ts";

export default function ListTransitions(){

    const { config } = useContext(MyContext);
    const [transitions, setTransitions] = useState();
    const [saldo, setSaldo] = useState();

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
            console.log("Deu ruim!", err.response);
        }
    },[]);

    function saldoAtual (list){
        for(let i = 0; i < list.length; i++){
            if (list[i].direction){
                setSaldo(saldo + Number(list[i]))
            }else{
                setSaldo(saldo - Number(list[i]))
            }
        }
    }

    return (
        <ContainerList>
            {transitions.map((t,index) => 
                <Li positive={t.direction} key={index}>
                    <h1>{t.date}</h1>
                    <h2>{t.description}</h2>
                    <h3>{t.value}</h3>
                </Li>
            )}
            <Saldo>
                <p>Saldo</p>
                {saldo}
            </Saldo>
        </ContainerList>
    )
}

const ContainerList = styled.ul`
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
padding: 10px;
position: relative;
`

const Li = styled.li`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #C6C6C6;
}
h2{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
}
h3{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.positive ? '#03AC00' : '#C70000'};
}
`

const Saldo = styled.li`
width: 100%;
position: absolute;
bottom: 0;
left: 10;
`