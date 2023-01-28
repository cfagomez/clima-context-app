import React, { createContext, useState } from 'react'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        pais: '',
        ciudad: '',
    })

    const [error, setError] = useState(false)

    const datosBusqueda = (e) => {

      setBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
      })

    }

  return (
    <ClimaContext.Provider value={{busqueda, datosBusqueda, error, setError}}>
        {children}
    </ClimaContext.Provider>
  )
}

export {
    ClimaProvider
}

export default ClimaContext