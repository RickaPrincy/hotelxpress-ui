import { useEffect, useState } from "react";
import useChangeId from "../../hooks/useChangeId";
import axios from "axios";
import OptionLists from "./OptionLists";
import { Input } from "antd";
import RoomResult from "./RoomResult/RoomResult";

function SearchOption() {
    const [list, setList, setListById] = useChangeId("checked", "id_room_content");
    const [tempList, setTempList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/room_contents")
            .then(response => {
                setList(response.data.map(el => {
                    return { ...el, checked: false };
                }));
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        setTempList([]);
        if (searchValue != "") {
            axios.get(`http://localhost:5000/find/room_content/${searchValue}`)
                .then(response => {
                    setTempList([])
                    if (response.data.length !== 0) {
                        setTempList(response.data.map(el => {
                            return { ...el, checked: getStatus(el.id_room_content) }
                        }));
                    }
                })
                .catch(error => console.log(error));
        }
    }, [searchValue]);

    const getStatus = (id) => {
        return list.find(el => el.id_room_content === id).checked;
    }

    return (
        <div className="w-full flex">
            <div className="w-[350px] p-5 bg-gray-100 h-screen">
                <h2 className="font-bold text-center mb-5 text-[18px]">Search Options</h2>
                <Input.Search
                    size="large"
                    placeholder="Ex: Wifi"
                    className="mb-2"
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <OptionLists list={searchValue === "" ? list : tempList} onChange={setListById} />
            </div>
            <RoomResult list={list} />
        </div>
    );
}

export default SearchOption;