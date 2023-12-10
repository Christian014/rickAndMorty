import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Container } from './style.js'
import { error } from 'console';


export function Search(){
  const [charData, setCharData] = useState({
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  })

  const [params, setParams] = useState(1);

  const handleSearchChar = () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/${params}`)
    .then((response: AxiosResponse) => {

      const data = {
        id: response.data.id,
        name: response.data.name,
        status: response.data.status,
        species: response.data.species,
        gender: response.data.gender,
        image:  response.data.image,
      };

      setCharData(data)
    })

    .catch((error) => {
      console.error('Erro Na Requisição:', error)
    });
}

return (
  <div>
    <input type="text" id="inputbuscar" value={params} onChange={(e) => setParams(Number(e.target.value))}/>

    <button id="bttbuscar" onClick={handleSearchChar} className="bttbuscar">
    Buscar
  </button>

  

  <p>ID do Personagem: {charData.id}</p>

  <p>Spécie: {charData.species}</p>

  <p>Status: {charData.status}</p>

  <p>Gender: {charData.gender}</p>

  <img
    src={`https://rickandmortyapi.com/api/character/avatar/${params}.jpeg`}
    alt="imagem do personagem"
  />
  <h1>{charData.name}</h1>
  </div>
)
}


function App() {
  
  
  return (

    <Container>
      < Search />

    </Container>
    
  )
  
}

export default App