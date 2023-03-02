import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SiswaList = () => {
  const [siswa, setSiswa] = useState([]);
 
  useEffect(() => {
    getSiswa();
  }, []);
 
  const getSiswa = async () => {
    const response = await axios.get("http://localhost:5000/siswa");
    setSiswa(response.data);
  };
 
  const deleteSiswa = async (siswaId) => {
    try {
      await axios.delete(`http://localhost:5000/siswa/${siswaId}`);
      getSiswa();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div class="w-full h-full overflow-x-auto font-poppins">
        <div className="py-4">
            <Link to="/addsiswa" className="button bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-300 mb-10">
                Tambah Siswa Baru
            </Link>
        </div>
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-white uppercase bg-blue-500">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        NAMA SISWA
                    </th>
                    
                    <th scope="col" class="px-6 py-3">
                        ACTION
                    </th>
                </tr>
            </thead>
            {siswa.map((siswa) => (
            <tbody>
                <tr class="bg-white border-b" key={siswa.id}>
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap">
                        {siswa.name}
                    </th>
                    <td class="px-6 py-4 justify-center">
                        <Link to={`editsiswa/${siswa.id}`} className="button bg-yellow-500 text-white px-2 py-2 rounded-lg hover:bg-blue-300">
                        Edit
                        </Link>
                        <a
                          onClick={() => deleteSiswa(siswa.id)}
                          className="button ml-1 bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-300"
                        >
                          Delete
                        </a>
                    </td>
                </tr>
            </tbody>
            ))}
        </table>
       
    </div>
  );
};
 
export default SiswaList;