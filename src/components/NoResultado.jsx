import useClima from "../hooks/useClima"

const NoResultado = () => {

    const {noResultado} = useClima()

  return (
    <div className='no-resultado'>
        <p>{noResultado}</p>
    </div>
  )
}

export default NoResultado