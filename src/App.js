//import logo from './logo.svg';
import { Container } from '@mui/material';
import './App.css';
import MainContent from './MainContent'

function App() {
  return (
    <div className="App" style={{display: "flex", justifyContent:"center", width:"100vw", backgroundColor:"red"}}>
      <Container maxWidth="sm" >
        <MainContent/>
      </Container>
      
    </div>
  );
}

export default App;
