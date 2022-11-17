import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from './styled';
import React from 'react';

import Rota2 from "./page/rota2/rota2";
import Rota1 from "./page/rota1/rota1";
import MyContext from "./context/MyContext";


export default function App() {
  return (
    <BrowserRouter>
    	<GlobalStyle/>
		<MyContext.Provider value={[1,2,3]}>
		<Routes>
			<Route path="/" element={<Rota1 />} />
			<Route path="/rota2" element={<Rota2 />}/>
		</Routes>
		</MyContext.Provider>
	</BrowserRouter>
  );
}