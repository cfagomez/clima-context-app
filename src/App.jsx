import AppClima from "./components/AppClima"
import { ClimaProvider } from "./context/ClimaProvider"

function App() {

  return (
    <ClimaProvider>
      <h1>Buscador de Clima</h1>
      <AppClima />
    </ClimaProvider>
  )
}

export default App
