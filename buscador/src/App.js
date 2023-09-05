import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './styles.css';
import api from "./services/api"


function App() {

  const [input, setInput] = useState('')
  const [data, setData] = useState('')

  async function aoClicar() {
    if(input === "") {
      alert("[ERRO] Digite um CEP Válido")
    } try {
      const res = await api.get(`${input}/json`)
      setData(res.data)
      setInput("")
    } catch {
      alert("[ERRO] Digite um CEP válido") 
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..." value={input} onChange={(e) =>setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={aoClicar}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

    {Object.keys(data).length > 0 && (
      <main className="main">
        <h2>Cep: {data.cep}</h2>
        <span>Rua:  {data.logradouro}</span> 
        <span>Bairro:  {data.bairro}</span> 
        <span>Estado:  {data.uf}</span> 
      </main>
    )}



    </div>
  );
}

export default App;