import { BookOutlined, CommentOutlined, HeartOutlined, MoneyCollectOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { UserInfo } from "../../../Context/UserInformation";
import axios from "axios";
import { message } from "antd";

function StatGrid() {
  const UserInformation = useContext(UserInfo);
  const values = [];
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/stats")
      .then(response => setStats(response.data))
      .catch(error => message.error("Une erreur de connexion"));
  }, []);

  if (UserInformation.isAdmin()) {
    values.push(
      { icon: <BookOutlined />, count: stats.reservationsCount, text: "Reservations", color: "text-red-600" },
      { icon: <UserOutlined />, count: stats.userCount, text: "Nombre d'utilisateurs", color: "text-green-600" },
      { icon: <MoneyCollectOutlined />, count: stats.totalMoney, text: "Argent Total", color: "text-yellow-600" },
      { icon: <SmileOutlined />, count: stats.roomCount, text: "Nombre de chambre", color: "text-orange-600" },
    );
  } else {
    values.push(
      { icon: <BookOutlined />, count: UserInformation.user.reservations.length, text: "Reservations", color: "text-red-600" },
      { icon: <HeartOutlined/>, count: UserInformation.user.bookmarks.length, text: "Nombre de favoris", color: "text-green-600" },
      { icon: <CommentOutlined/>, count: UserInformation.user.give_hotel_feedbacks.length, text: "Commentaire sur les chambres", color: "text-yellow-600" },
      { icon: <CommentOutlined/>, count: UserInformation.user.give_room_feedbacks.length, text: "Commentaire sur les hotels", color: "text-yellow-600" },
    );
  }

  return (
    <div className='flex gap-4 w-full text-[14px] font-bold' >
      {
        values.map((el, index) => {
          return (
            <div className='bg-white shadow-md rounded-lg p-4 flex-1 flex itemes-center' key={index}>
              <div className={`flex flex-row gap-5 ${el.color}`}>
                <div className="font-bold text-[25px] mt-2">
                  {el.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">{el.count}</span>
                  <span>{el.text}</span>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default StatGrid