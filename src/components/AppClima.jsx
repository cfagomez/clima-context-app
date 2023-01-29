import React from 'react'
import useClima from '../hooks/useClima'
import Formulario from './Formulario'
import Resultado from './Resultado'

const AppClima = () => {

  const {resultado} = useClima()

  return (
    <main className='dos-columnas'>
        <Formulario />
        {
          resultado?.name ? <Resultado /> : null
        }
    </main>
  )
}

export default AppClima