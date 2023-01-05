import { Navigate, Route, Routes } from "react-router-dom";
import { ClientesApp, CreateClientes, EditClientes } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientesApp />} />
        <Route path="/create" element={<CreateClientes />} />
        <Route path="/edit/:id" element={<EditClientes />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
