import axios from 'axios';
import { AxiosResponse } from "axios";


const params = 123;

axios.get(`https://rickandmortyapi.com/api/character/${params}`)
.then((response: AxiosResponse) => {
  console.log(params)
  console.log(response.data.id)
  console.log(response.data.name)
  console.log(response.data.image)


/*let idCharacter = response.data.id
  let nameCharacter = response.data.name
  let imageCharacter = response.data.image */
})



function App() {
  
  
  return (
    <>
      <input type="text" id='inputbuscar' className='inputbuscar'/>
      <button id='bttbuscar' className='bttbuscar'>buscar</button>
      <h1>hello world</h1>
      <img src="https://rickandmortyapi.com/api/character/avatar/50.jpeg" alt="" />
    </>

    
  )
  
}

export default App