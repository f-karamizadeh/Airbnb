import * as Unicons from "@iconscout/react-unicons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { L, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { createClient } from "contentful";
import ClipLoader from "react-spinners/ClipLoader";

const Details = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const client = createClient({
    space: "hxtsxz7l061e",
    accessToken: "utvoLJo4pyoCkWGeUmeSYnzcrucNPDnqIi1oaCKa0yw",
  });

  useEffect(() => {
    setLoading(true);
    client
      .getEntries()
      .then((response) => {
        setEntries(response.items[0].fields.accommodations.unterkuenfte);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const { id } = useParams();
  const idUrl = Number(id);

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const position = [lat, lng];
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  let filteredUnterkunft;
  if (entries.length) {
    filteredUnterkunft = entries.find((unterkunft) => unterkunft.id === idUrl);
  }

  let name, ort, preis, bilder, bewertung, ausstattung;
  if (entries.length) {
    ({ name, ort, preis, bilder, bewertung, ausstattung } = filteredUnterkunft);
  }

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(
          `https://geocode.maps.co/search?q=${ort}&api_key=65a51c8d6d1e3604044118uife7188e`
        )
        .then((response) => {
          setLat(response.data[0].lat);
          setLng(response.data[0].lon);
        });
    }
  }, []);

  const cleaningFee = 59;
  const serviceFee = 39;
  const deposit = preis * 2.5;

  const calculateNights = () => {
    if (date[0].endDate !== null) {
      const startDate = date[0].startDate;
      const endDate = date[0].endDate;
      const timeDiff = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return diffDays;
    } else {
      return 1;
    }
  };

  const calculatePrice = () => {
    const nights = calculateNights();
    const price = preis;
    const total = nights * price;
    return total;
  };

  const totalPrice = calculatePrice() + cleaningFee + serviceFee + deposit;

  return (
    <>
      {!entries.length ? (
        <div className="flex justify-center m-10">
          <ClipLoader
            color="#44b3be"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-16">
          <div className="w-4/6 flex justify-between">
            <div className="hidden lg:block lg:text-3xl font-bold">{name}</div>
            <div className="flex space-x-4">
              <div className="text-sm lg:flex items-center justify-end hidden">
                <Unicons.UilShare size={16} className="mr-2" /> Teilen
              </div>
              <div className="text-sm hidden lg:flex items-center justify-end">
                <Unicons.UilHeart size={16} className="mr-2" /> Speichern
              </div>
            </div>
          </div>

          <div className="h-auto my-10 lg:flex justify-center items-center gap-4 hidden">
            <div>
              <img
                src={bilder[0]}
                className="bg-bootbnb-800 w-[497px] h-[497px] rounded-tl-xl rounded-bl-xl"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div>
                  <img
                    src={bilder[1]}
                    className="w-[240px] h-[240px] bg-bootbnb-400"
                  />
                </div>
                <div>
                  <img
                    src="https://picsum.photos/310"
                    className="w-[240px] h-[240px] bg-bootbnb-400 rounded-tr-xl"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <img
                    src="https://picsum.photos/305"
                    className="w-[240px] h-[240px] bg-bootbnb-400"
                  />
                </div>
                <div>
                  <img
                    src="https://picsum.photos/333"
                    className="w-[241px] h-[241px]  bg-bootbnb-400 rounded-br-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden my-2 flex flex-col gap-4">
            <div>
              <img src={bilder[0]} className="w-full h-auto" />
            </div>
          </div>

          <div className="px-2 lg:w-4/6 lg:flex justify-between">
            <div className="flex flex-col lg:w-[60%]">
              <div className="text-lg lg:text-2xl font-bold mb-6">
                {name} in {ort}
              </div>
              <div className="flex space-x-4 items-center">
                <div>
                  <Unicons.UilUserCircle size={48} />
                </div>
                <div className="flex flex-col">
                  <span className="text-md font-semibold">
                    Gastgeber:in Max Mustermann{" "}
                  </span>
                  <span>Seit 3 Jahren Gastgeber:in</span>
                </div>
              </div>
              <hr className="border-gray-300 border my-4"></hr>

              <div className="flex justify-center items-center text-4xl font-bold">
                <Unicons.UilStar size={40} className="mr-2 text-[#fcba03]" />
                {bewertung}
              </div>

              <hr className="border-gray-300 border my-4"></hr>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Unicons.UilLocationPoint size={24} />
                  <div className="flex flex-col">
                    <span className="font-semibold">Tolle Lage</span>
                    <span>
                      95 % der letzten Gäste haben die Lage mit 5 Sternen
                      bewertet.
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Unicons.UilKeyholeCircle size={24} />
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      Tolle Check-in-Erfahrung
                    </span>
                    <span>
                      95 % der letzten Gäste haben den Check-in-Vorgang mit 5
                      Sternen bewertet.
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Unicons.UilCalender size={24} />
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      Kostenlose Stornierung innerhalb von 48 Stunden
                    </span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300 border my-4"></hr>

              <div className="flex flex-col space-y-4 py-4">
                <div className="text-justify">
                  <p>
                    The European languages are members of the same family. Their
                    separate existence is a myth. For science, music, sport,
                    etc, Europe uses the same vocabulary. The languages only
                    differ in their grammar, their pronunciation and their most
                    common words. Everyone realizes why a new common language
                    would be desirable: one could refuse to pay expensive
                    translators.
                  </p>
                </div>
                <div className="text-justify">
                  <p>
                    The European languages are members of the same family. Their
                    separate existence is a myth. For science, music, sport,
                    etc, Europe uses the same vocabulary. The languages only
                    differ in their grammar, their pronunciation and their most
                    common words. Everyone realizes why a new common language
                    would be desirable: one could refuse to pay expensive
                    translators.
                  </p>
                </div>
                <span className="font-semibold flex items-center underline">
                  Mehr lesen <Unicons.UilAngleRightB />
                </span>
              </div>

              <hr className="border-gray-300 border my-4"></hr>

              <div className="flex flex-col space-y-4 py-4">
                <h3 className="text-xl font font-semibold">Ausstattung</h3>
                <div>
                  <ul>
                    <li className="flex flex-row">
                      <Unicons.UilCheck className="mr-2" />
                      {ausstattung[0]}
                    </li>
                    <li className="flex flex-row">
                      <Unicons.UilCheck className="mr-2" />
                      {ausstattung[1]}
                    </li>
                    <li className="flex flex-row">
                      <Unicons.UilCheck className="mr-2" />
                      {ausstattung[2]}
                    </li>
                  </ul>
                </div>
              </div>

              {lng.length > 0 && (
                <div id="map" className="w-auto h-auto mb-12">
                  <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                      <Popup>
                        <div className="w-[300px] flex justify-between">
                          <img
                            src={bilder[0]}
                            className="w-[100px] h-[100px] bg-bootbnb-400"
                          />
                          <div className="flex flex-col justify-center items-start">
                            <p className="font-poppins font-semibold">{name}</p>
                            <p className="font-poppins font-medium">
                              {preis}€ pro Nacht
                            </p>
                            <p className="font-poppins font-medium inline-flex items-center">
                              {bewertung} <Unicons.UilStar size={16} />
                            </p>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              )}
            </div>

            <div className="flex flex-col lg:items-center w-full md:min-w-[430px] lg:w-[450px]">
              <div className="p-4 lg:w-10/12 rounded-lg border-gray-200 border-solid border shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col items-baseline gap-4">
                <div>
                  <span className="text-xl font-semibold mr-2">{preis} €</span>
                  Nacht
                </div>
                <div className="">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                  />
                </div>
                <div className="justify-center w-full">
                  <button className="p-3 rounded-lg text-white font-semibold text-lg bg-bootbnb-500 w-full">
                    Reservieren
                  </button>
                </div>

                <div className="flex flex-col justify-center items-center text-sm">
                  <p className="text-gray-500">
                    Du musst noch nichts bezahlen.
                  </p>
                  <p className="text-gray-500 text-center">
                    Der Preis pro Nacht beinhaltet die MwSt. und sämtliche
                    Gebühren.
                  </p>
                </div>

                <div className="flex flex-col space-y-2 w-full">
                  <div className="flex items-center justify-between text-gr">
                    <div className="text-sm">
                      {preis}€ * {calculateNights()} Nächte
                    </div>
                    <div className="text-sm">{calculatePrice()} €</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Reinigungsgebühr</div>
                    <div className="text-sm">{cleaningFee}€</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Servicegebühr</div>
                    <div className="text-sm">{serviceFee}€</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">Kaution</div>
                    <div className="text-sm">{deposit}€</div>
                  </div>
                  <hr className="border-gray-400 py-2"></hr>
                  <div className="flex items-center justify-between font-semibold">
                    <div className="text-md">Gesamtpreis</div>
                    <div className="text-md">{totalPrice}€</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
