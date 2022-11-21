import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #8C11BE;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export const ContainerCadastro = styled.div`
  width: 100%;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
  }
  p{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
  }
`

export const FormUp = styled.form`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    width: 326px;
    height: 58px;
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

export const ContainerLogin = styled.div`
  width: 100%;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-family: 'Saira Stencil One', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
  }
  p{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
  }
`

export const FormIn = styled.form`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    width: 326px;
    height: 58px;
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

export const ContainerTransitions = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 25px;
`

export const TituloTransitions = styled.div`
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

export const SideBar = styled.div`
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

export const ContainerCarregamento = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 200px;
    }
`

export const ContainerList = styled.ul`
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
padding: 10px;
position: relative;
`

export const Li = styled.li`
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

export const Saldo = styled.li`
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

export const ContainerNewIn = styled.div`
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

export const FormNewIn = styled.form`
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

export const ContainerNewOut = styled.div`
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

export const FormNewOut = styled.form`
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