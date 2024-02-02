import * as Unicons from "@iconscout/react-unicons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

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
    bilder: [],
    bewertung: "5",
  });

  const onDrop = (acceptedFiles) => {
    const images = acceptedFiles.map((file) => URL.createObjectURL(file));
    setUnterkunft({ ...unterkunft, bilder: [...unterkunft.bilder, ...images] });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
    multiple: true,
    name: "bilder",
  });

  const handleInput = (e) => {
    if (e.target.name === "type") {
      setUnterkunft({ ...unterkunft, type: e.target.value });
    } else {
      setUnterkunft({ ...unterkunft, [e.target.name]: e.target.value });
    }
  };

  console.log(unterkunft);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bootbnb.onrender.com/create",
        unterkunft
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  console.log(unterkunft);
  return (
    <>
      <div className="flex flex-col space-y-4 my-8 justify-between items-center">
        <form
          action="/create"
          encType="multipart/form-data"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <label htmlFor="ort">Ort der Unterkunft</label>
          <input
            type="text"
            name="ort"
            value={unterkunft.ort}
            onChange={handleInput}
            id="ort"
            className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1"
          />
          <label htmlFor="name">Name der Unterkunft</label>
          <input
            type="text"
            name="name"
            id="name"
            className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1"
            value={unterkunft.name}
            onChange={handleInput}
          />
          <label htmlFor="preis">Preis</label>
          <input
            type="text"
            name="preis"
            id="preis"
            className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1"
            value={unterkunft.preis}
            onChange={handleInput}
          />
          <label htmlFor="type">Art der Unterkunft</label>
          <select
            name="type"
            id="type"
            className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1"
            value={unterkunft.type}
            onChange={handleInput}
          >
            <option selected>Art der Unterkunft</option>
            <option value="city">City</option>
            <option value="nature">Nature</option>
            <option value="tiny">Tiny</option>
          </select>
          <label htmlFor="ausstattung">3 wichtigste Ausstattungsmerkmale</label>
          <div id="ausstattung" className="flex flex-col space-y-2">
            <input
              type="text"
              id="ausstattung0"
              name="ausstattung0"
              className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1"
              value={unterkunft.ausstattung0}
              onChange={handleInput}
            />
            <input
              type="text"
              id="ausstattung1"
              name="ausstattung1"
              className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1"
              value={unterkunft.ausstattung1}
              onChange={handleInput}
            />
            <input
              type="text"
              id="ausstattung2"
              name="ausstattung2"
              className="focus:outline-none border border-gray-300 rounded w-72 h-10 p-1"
              value={unterkunft.ausstattung2}
              onChange={handleInput}
            />
          </div>
          <div
            {...getRootProps()}
            className="border border-gray-300 rounded w-72 h-10 flex justify-center items-center cursor-pointer bg-bootbnb-50 p-4"
          >
            <input {...getInputProps()} />
            <p>Bilderupload</p>
          </div>
          {unterkunft.bilder.length > 0 && (
            <div className="flex flex-col space-y-2">
              {unterkunft.bilder.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className="w-72 h-36 object-cover rounded"
                />
              ))}
            </div>
          )}
        </form>
        <button
          className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          <Unicons.UilPlus className="mr-2" /> Unterkunft erstellen
        </button>
      </div>
    </>
  );
};

export default Create;
