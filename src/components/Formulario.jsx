import React from 'react'

const Formulario = () => {
  return (
    <div className='contenedor'>
        <form>
            <div className='campo'>
                <label>
                    Ciudad
                </label>
                <input type="text" />
            </div>
            <div className='campo'>
                <label>
                    Pais
                </label>
                <select name="pais" id="pais">
                    <option value="">-- Seleccione una opcion --</option>
                    <option value="argentina">Argentina</option>
                    <option value="mongolia">Mongolia</option>
                    <option value="hungria">Hungria</option>
                    <option value="groenlandia">Groenlandia</option>
                    <option value="escocia">Escocia</option>
                </select>
            </div>
            <input type="submit" value="Consultar Clima" />
        </form>
    </div>
  )
}

export default Formulario