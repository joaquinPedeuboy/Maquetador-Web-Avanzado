import { Container } from "react-bootstrap"
import HeaderApp from "./components/header/HeaderApp"
import PuntoDeEquilibrioList from "./components/view/PuntoDeEquilibrioList"
import { Route, Routes } from "react-router"
import PuntoDeEquilibrioForm from "./components/puntoDeEquilibrio/PuntoDeEquilibrioForm"

function App() {


  return (
    <>
      <HeaderApp/>
      <Container>
        <Routes>
          <Route path="/" element={<PuntoDeEquilibrioList/>}/>
          <Route path="/create-puntoDeEquilibrio" element={<PuntoDeEquilibrioForm/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
