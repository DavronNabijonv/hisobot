import "./App.css";
import { Routes, Route } from "react-router-dom";
import Kirish from "./pages/kirishQismi";
import Register from "./components/pageQismlari/kirish_qismi/register";
import Asosiy from "./pages/asosiy";
import Tutors from "./pages/tutors";
import Filiallar from "./pages/filiallar";
import Analitika from "./pages/analitika";
import Qollash from "./pages/qollash";
import Nastroyka from "./pages/nastroyka";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Kirish />} />
      <Route path="/reg" element={<Register />} />
      <Route path="/asosiy" element={<Asosiy />} />
      <Route path="/tutors" element={<Tutors />} />
      <Route path="/filial" element={<Filiallar />} />
      <Route path="/analitika" element={<Analitika />} />
      <Route path="/qollash" element={<Qollash />} />
      <Route path="/nastroyka" element={<Nastroyka />} />
    </Routes>
  );
}

export default App;
