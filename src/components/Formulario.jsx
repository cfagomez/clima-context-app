import useClima from '../hooks/useClima'

const Formulario = () => {

    const {busqueda, datosBusqueda} = useClima()

    const {pais, ciudad} = busqueda

  return (
    <div className='contenedor'>
        <form>
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
                </select>
            </div>
            <input type="submit" value="Consultar Clima" />
        </form>
    </div>
  )
}

export default Formulario