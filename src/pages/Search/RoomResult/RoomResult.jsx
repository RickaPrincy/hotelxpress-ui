import { useContext, useEffect, useState } from "react";
import { SearchFilter } from "../../../App";
import axios from "axios";
import Room from "./Room";
import RoomNotFound from "./RoomNotFound";
import { Spin } from "antd";

function RoomResult({ list }) {
    const search = useContext(SearchFilter);
    const [list_room, setListRoom] = useState([]);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        const data = {
            location: search.location,
            arrival: search.interval && search.interval[0] ? search.interval[0].format() : "",
            departure: search.interval && search.interval[1] ? search.interval[1].format() : "",
            id_room_type: search.room_type,
            id_options: [...list].filter(el => el.checked).map(el => el.id_room_content)
        }

        setPending(true);

        axios.post("http://localhost:5000/find/room/options", data)
            .then(response => {
                setListRoom(response.data)
                setPending(false);
            })
            .catch(error => {
                console.log(error)
                setPending(false);
            })

    }, [list, search]);

    const getElementToPrint = () => {
        if (pending)
            return <div className="w-full m-0 pt-5 d-c-c"><Spin size="large" /></div>
        else if (list_room.length > 0) {
            return list_room.map(el => <Room room={el} key={el.id_room} />)
        }
        return <RoomNotFound/>
    }
    
    return (
        <div className="w-full p-5 shadow">
            {getElementToPrint()}     
        </div>
    );
}

export default RoomResult;