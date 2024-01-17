import { useState, useEffect } from 'react'
import Buscador from './components/Buscador'
import MiApi from './components/MiApi'
import { dragonBallApi } from './components/api'


function App() {
  const [personajes, setPersonajes] = useState([])
  const [personajesFiltrados, setPersonajesFiltrados] = useState([]) 

  useEffect(() => {
    dragonBallApi(setPersonajes);
  }, []);

  return (
    <>
      <div className='container bg-warning text-dark'>
        <div className='container text-center'>
          <div className='row align-items-start'>
            <div className='col'>
              <Buscador personajesFiltrados={personajesFiltrados} setPersonajesFiltrados={setPersonajesFiltrados} personajes={personajes}></Buscador>
              <MiApi personajes= {personajes} personajesFiltrados={personajesFiltrados}></MiApi>

            </div>
          </div>

        </div>
      </div>

      
    </>
  )
}

export default App
