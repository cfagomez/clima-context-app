import useClima from '../hooks/useClima'
import Error from './Error'

const Formulario = () => {

    const {busqueda, datosBusqueda, error, setError, consultarClima} = useClima()

    const {pais, ciudad} = busqueda

    const handleSubmit = (e) => {

        e.preventDefault()

        if (Object.values(busqueda).includes('' )) {

            setError('Todos los campos son obligatorios')

            return

        }

        setError(false)

        consultarClima()

    }

  return (
    <div className='contenedor'>
        {
            error && <Error />
        }
        <form
            onSubmit={handleSubmit}
        >
            <div className='campo'>
                <label>
                    Ciudad
                </label>
                <input 
                    type="text"
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={datosBusqueda}
                />
            </div>
            <div className='campo'>
                <label>
                    Pais
                </label>
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={datosBusqueda}
                >
                    <option value="">-- Seleccione una opcion --</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Hungria">Hungria</option>
                    <option value="Groenlandia">Groenlandia</option>
                    <option value="Escocia">Escocia</option>
                    <option value="Finlandia">Finlandi</option>
                </select>
            </div>
            <input type="submit" value="Consultar Clima" />
        </form>
    </div>
  )
}

export default Formulario