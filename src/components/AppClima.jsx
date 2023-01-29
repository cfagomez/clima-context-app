import React from 'react'
import useClima from '../hooks/useClima'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Spinner from './Spinner'
import NoResultado from './NoResultado'

const AppClima = () => {

  const {resultado, cargando, noResultado} = useClima()

  return (
    <main className='dos-columnas'>
        <Formulario />
        {
          cargando ? <Spinner /> : resultado?.name ? <Resultado /> : noResultado ? <NoResultado /> : null
        }
    </main>
  )
}

export default AppClima