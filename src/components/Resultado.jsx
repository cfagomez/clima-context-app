import useClima from "../hooks/useClima"

const Resultado = () => {

    const {resultado} = useClima()

    const kelvin = 273.15

  return (
    <div className="contenedor clima">
        <h2>El clima en {resultado.name} es: </h2>
        <p>{parseInt(resultado.main.temp - kelvin)}<span>&#x2103;</span></p>
        <p>Temperatura Maxima: {parseInt(resultado.main.temp_max - kelvin)}<span>&#x2103;</span></p>
        <p>Temperatura Minima: {parseInt(resultado.main.temp_min - kelvin)}<span>&#x2103;</span></p>
    </div>
  )
}

export default Resultado
