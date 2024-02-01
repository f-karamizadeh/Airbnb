import * as Unicons from "@iconscout/react-unicons";
import { useEffect, useState } from "react";
import axios from "axios";



const Create = () => {
  const [unterkunft, setUnterkunft] = useState({  
    ort: "",
    name: "",
    preis: "",
    type: "",
    ausstattung0: "",
    ausstattung1: "",
    ausstattung2: "",
    guest_favorite: false,
    bilder: ["https://i.ibb.co/tBqcDjL/loft1.jpg", "https://i.ibb.co/6wXvLBH/haus-see.jpg", "https://i.ibb.co/SvwF72z/loft2.jpg"],
    bewertung: "5",
  })

  

  const handleInput = (e) => {
    if (e.target.name === "type") {
      setUnterkunft({ ...unterkunft, type: e.target.value });
    } else {
      setUnterkunft({ ...unterkunft, [e.target.name]: e.target.value });
    }
  }

console.log(unterkunft)

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:3000/create", unterkunft);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


  return (
    <>
    <div className="flex flex-col space-y-4 my-8 justify-between items-center">
     <form action="/create" method="POST" className="flex flex-col space-y-4">
      <label htmlFor="ort">Ort der Unterkunft</label>
      <input type="text" name="ort" value={unterkunft.ort} onChange={handleInput} id="ort" className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1" />
      <label htmlFor="name">Name der Unterkunft</label>
      <input type="text" name="name" id="name" className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1" value={unterkunft.name} onChange={handleInput} />
      <label htmlFor="preis">Preis</label>
      <input type="text" name="preis" id="preis" className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1"  value={unterkunft.preis} onChange={handleInput} />
      <label htmlFor="type">Art der Unterkunft</label>
      <select name="type" id="type" className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1" value={unterkunft.type} onChange={handleInput}>
        <option value="city">City</option>
        <option value="nature">Nature</option>
        <option value="tiny">Tiny</option>
      </select>
      <label htmlFor="ausstattung">3 wichtigste Ausstattungsmerkmale</label>
      <div id="ausstattung" className="flex flex-col space-y-2">
        <input type="text" id="ausstattung0" name="ausstattung0" className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1"  value={unterkunft.ausstattung0} onChange={handleInput} />
        <input type="text" id="ausstattung1" name="ausstattung1" className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1" value={unterkunft.ausstattung1} onChange={handleInput}/>
        <input type="text" id="ausstattung2" name="ausstattung2" className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1" value={unterkunft.ausstattung2} onChange={handleInput}/>
      </div>
           </form>
      <button className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit} >
        <Unicons.UilPlus className="mr-2" /> Unterkunft erstellen</button>
     </div>
    </>
  );
};

export default Create;
