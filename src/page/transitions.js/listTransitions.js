import axios from "axios";
import React,{ useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MyContext from "../../context/MyContext.ts";

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

const ContainerCarregamento = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 200px;
    }
`

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
width: 90%;
position: absolute;
bottom: 0;
left: 10;
display: flex;
justify-content: space-between;
align-items: center;
p{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #000000;
}
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: ${props => props.negative ? '#03AC00' : '#C70000'}
}
`