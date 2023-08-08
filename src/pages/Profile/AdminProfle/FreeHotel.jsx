import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid";

function FreeHotel() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/hotels")
      .then(response => {
        console.log(response.data);
        setHotels(response.data)
      })
      .catch(error => message.error("Une erreur de connexion a eu lieu"))
  }, []);

  return (
    <div className="bg-white shadow-md w-1/3 p-4 mt-5 h-96 overflow-hidden overflow-y-scroll ">
      <h1 className="font-bold text-2xl p-2 mb-4">Hotels</h1>
      {
        hotels.map((el, index) => {
          return (
            <div className="bg-slate-200 border-l-8 border-red-600 rounded-md p-4 mb-4 flex gap-24" key={uuid()}>
              {el.hotel_name}
            </div>
          )
        })
      }
    </div>
  )
}

export default FreeHotel