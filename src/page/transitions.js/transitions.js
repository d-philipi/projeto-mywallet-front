import React from "react";
import styled from "styled-components";
import ListTransitions from "./listTransitions";

export default function Transitions(){

    function entrada(){

    }

    function saida(){

    }

    return (
        <ContainerTransitions>
            <Titulo>
               <h1>Olá</h1>
               <ion-icon name="exit-outline"></ion-icon>
            </Titulo>
            <ListTransitions/>
            <SideBar>
                <button onClick={entrada}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </button>
                <button onClick={saida}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </button>
            </SideBar>
        </ContainerTransitions>
    )
}

const ContainerTransitions = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 25px;
`

const Titulo = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
h1{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
}
ion-icon{
    width: 30px;
    height: 30px;
    color: #FFFFFF;
    cursor:pointer;
}
`

const SideBar = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
button{
    width: 175px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border: 1px solid #A328D6;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #FFFFFF;
    cursor:pointer;

    ion-icon{
        width: 30px;
        height: 30px;
        color: #FFFFFF;
    }
}
`
