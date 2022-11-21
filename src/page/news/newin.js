import React from "react";
import styled from "styled-components";

export default function NewIn({valorIn, setValorIn, descricaoIn, setDescricaoIn}){

    function registrar (){
        
    }

    return(
        <ContainerNewIn>
            <FormNewIn onSubmit={registrar}>
                <input/>
                <input/>
                <button></button>
            </FormNewIn>
            Nova entrada;
        </ContainerNewIn>
    )
};

const ContainerNewIn = styled.div`

`

const FormNewIn = styled.form`

`