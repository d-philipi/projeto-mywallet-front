import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from './styled';
import { useState } from "react";
import React from 'react';
import MyContext from "./context/MyContext.ts";

import SignIn from "./page/signin/signin";
import SignUp from "./page/signup/signup";
import Transitions from "./page/transitions.js/transitions";
import NewIn from "./page/news/newin";
import NewOut from "./page/news/newout";


export default function App() {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [checkSenha, setCheckSenha] = useState("");
	const [nome, setNome] = useState("");
	const [token, setToken] = useState("");
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const [valorIn, setValorIn] = useState("");
	const [descricaoIn, setDescricaoIn] = useState("");
	const [valorOut, setValorOut] = useState("");
	const [descricaoOut, setDescricaoOut] = useState("");


  return (
    <BrowserRouter>
    	<GlobalStyle/>
		<MyContext.Provider value={{token, setToken, config}}>
		<Routes>
			<Route path="/" 
			element={<SignIn
			email={email}
			setEmail={setEmail}
			senha={senha}
			setSenha={setSenha}
			/>} />
			<Route path="/sign-up" 
			element={<SignUp
			email={email}
			setEmail={setEmail}
			senha={senha}
			setSenha={setSenha}
			nome={nome}
			setNome={setNome}
			checkSenha={checkSenha}
			setCheckSenha={setCheckSenha}
			/>}/>
			<Route path="/transitions"
			element={<Transitions
			/>}/>
			<Route path="/new-in"
			element={<NewIn
			valorIn={valorIn}
			setValorIn={setValorIn}
			descricaoIn={descricaoIn}
			setDescricaoIn={setDescricaoIn}
			/>}/>
			<Route path="/new-out"
			element={<NewOut
			valorOut={valorOut}
			setValorOut={setValorOut}
			descricaoOut={descricaoOut}
			setDescricaoOut={setDescricaoOut}
			/>}/>
		</Routes>
		</MyContext.Provider>
	</BrowserRouter>
  );
}