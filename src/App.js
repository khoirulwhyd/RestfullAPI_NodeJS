import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import logo from './logo.svg';
import './App.css';
import SiswaList from "./components/SiswaList";
import AddSiswa from "./components/SiswaBaru/AddSiswa";
import EditSiswa from "./components/SiswaBaru/EditSiswa";
import DataSiswaList from "./components/DataSiswaList";
import ListSiswa from "./components/SiswaBaru/ListSiswa";
import DashboardAdmin from "./components/Dashboard/DashboardAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardAdmin />}/>

        <Route path="/siswa" element={<ListSiswa/>}/>
        <Route path="/siswa/addsiswa" element={<AddSiswa/>}/>
        <Route path="/siswa/editsiswa/:id" element={<EditSiswa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
