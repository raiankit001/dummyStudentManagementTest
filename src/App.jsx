import { Container } from '@mui/material'
import './App.css'
import ButtonAppBar from './components/Navbar'
import Students from './components/Students'

function App() {
  return (
    <>
      {/* <h1>Full stack web app</h1> */}
        <div style={{ width: "100vw", textAlign: "center" }}>
          <ButtonAppBar />
      <Container>
          <Students />
      </Container>
        </div>
    </>
  )
}

export default App
