import useClima from "../hooks/useClima"

const Resultado = () => {

    const {resultado} = useClima()

  return (
    <div className="contenedor">
        <h2>El clima en {resultado.name} es:</h2>
    </div>
  )
}

export default Resultado
