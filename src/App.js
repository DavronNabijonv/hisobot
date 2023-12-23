import './App.css';
import { Routes, Route } from "react-router-dom";
import Kirish from './pages/kirishQismi';
import Register from './components/pageQismlari/kirish_qismi/register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Kirish/>}/>
      <Route path='/reg' element={<Register/>}/>
    </Routes>
  );
}

export default App;
