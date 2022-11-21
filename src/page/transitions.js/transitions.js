import React, { useContext } from "react";
import ListTransitions from "./listTransitions";
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext.ts';
import { ContainerTransitions, SideBar, TituloTransitions } from "../../styled";

export default function Transitions(){

    const navigate = useNavigate();
    const { usuario } = useContext(MyContext);

    function entrada(){
        navigate("/new-in");
    }

    function saida(){
        navigate("/new-out");
    }

    function logOut(){
        navigate("/");
    }

    return (
        <ContainerTransitions>
            <TituloTransitions>
               <h1>Olá {usuario.name}</h1>
               <ion-icon onClick={logOut} name="exit-outline"></ion-icon>
            </TituloTransitions>
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