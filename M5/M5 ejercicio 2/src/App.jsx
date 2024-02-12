import PresupuestoForm from "./components/form/PresupuestoForm"
import HeaderApp from "./components/header/HeaderApp"
import VistaPresupuesto from "./components/view/VistaPresupuesto"
import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router"

function App() {


  return (
    <>
      <HeaderApp/>
      <Container>
        <Routes>
          <Route path="/" element={<VistaPresupuesto/>}/>
          <Route path="/create-presupuesto" element={<PresupuestoForm/>}/>
        </Routes>
      </Container>
      
    </>
  )
}

export default App
