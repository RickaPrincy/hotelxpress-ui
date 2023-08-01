import { useContext, useEffect, useState } from "react";
import { SearchFilter } from "../../../App";
import axios from "axios";
import Room from "./Room";

function RoomResult({ list }) {
    const search = useContext(SearchFilter);
    const [list_room, setListRoom] = useState([]);

    useEffect(()=>{
        const data = {
            location: search.location,
            arrival: search.interval && search.interval[0] ? search.interval[0].format() : "",
            departure:  search.interval && search.interval[1] ? search.interval[1].format() : "",
            id_room_type: search.room_type,
            id_options: [...list].filter(el=>el.checked).map(el=>el.id_room_content)
        }
        axios.post("http://localhost:5000/find/room/options",data)
            .then(response => {
                setListRoom(response.data)
            })
            .catch(error=>console.log(error))

    },[list, search]);

    return (
        <div className="w-full p-5 shadow">
            {list_room.map(el=><Room room={el} key={el.id_room}/>)} 
        </div>
    );
}

export default RoomResult;