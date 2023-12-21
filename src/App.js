import './App.css';
import { Routes, Route } from "react-router-dom";
import Kirish from './pages/kirishQismi';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Kirish/>}/>
    </Routes>
  );
}

export default App;
