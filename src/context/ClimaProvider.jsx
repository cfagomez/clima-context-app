import axios from 'axios'
import React, { createContext, useState } from 'react'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        pais: '',
        ciudad: '',
    })

    const [error, setError] = useState(false)

    const [resultado, setResultado] = useState({

    })

    const [cargando, setCargando] = useState(false)

    const [noResultado, setNoResultado] = useState(false)

    const datosBusqueda = (e) => {

      setBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
      })

    }

    const consultarClima = async () => {

      setResultado({

      })

      setNoResultado(false)

      setCargando(true)

      const {ciudad, pais} = busqueda

      const appId = import.meta.env.VITE_API_KEY

      try {

        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

        const {data}  = await axios(url)

        const {lat, lon} = data[0]

        const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

        const {data : clima} = await axios(urlClima)

        setResultado(clima)

      } catch (error) {

        setNoResultado('No se han encontrado resultados')

      }

      setCargando(false)

    }

  return (
    <ClimaContext.Provider value={{busqueda, datosBusqueda, error, setError, consultarClima, resultado, cargando, noResultado}}>
        {children}
    </ClimaContext.Provider>
  )
}

export {
    ClimaProvider
}

export default ClimaContext