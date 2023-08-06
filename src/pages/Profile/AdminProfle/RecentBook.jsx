import { useState } from "react"
import { useContext } from "react";
import { useEffect } from "react"
import { v4 as uuid } from "uuid";
import { UserInfo } from "../../../Context/UserInformation";
import axios from "axios";
import { message } from "antd";
import ColTable from "./ColTable";

function RecentBook() {
  const [datasource, setDatasource] = useState([]);
  const userInformation = useContext(UserInfo);

  useEffect(() => {
    const url = userInformation.isAdmin() ?
      "reservations" : `reservation/${userInformation.user.id_user}`;

    axios.get(`http://localhost:5000/${url}`)
      .then(response => setDatasource(response.data))
      .catch(error => message.error("Une erreur c'est produite"));
  }, []);

  return (
    <div className="bg-white shadow-md w-2/3 p-4 mt-5 h-96 overflow-x-hidden overflow-y-scroll">
      <h1 className="font-bold text-[22px] mb-3 ">Reservation récents</h1>
      <table className="w-full">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr className="text-start bg-neutral-300">
            <th className="text-start p-2">Utilisateur</th>
            <th className="text-start p-2">Date Reservation</th>
            <th className="text-start p-2">Debut</th>
            <th className="text-start p-2">Fin</th>
            <th className="text-start p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            datasource.map(el => {
              return <ColTable key={uuid()} element={el} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default RecentBook