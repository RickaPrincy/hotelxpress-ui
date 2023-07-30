import { useEffect, useState } from "react";
import useChangeId from "../../hooks/useChangeId";
import axios from "axios";
import OptionLists from "./OptionLists";
import { Input } from "antd";

function SearchOption() {
    const [list, setList, setListById] = useChangeId("checked", []);
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
        if (searchValue != "") {
            axios.get(`http://localhost:5000/find/room_content/${searchValue}`)
                .then(response => {
                    if (response.data.length !== 0) {
                        setTempList(response.data);
                    }
                })
                .catch(error => console.log(error));
        }
        else {
            setTempList([]);
        }

    }, [searchValue]);

    return (
        <div className="w-[250px] p-5 bg-gray-100 h-screen">
            <h2 className="font-bold text-center mb-5 text-[18px]">Search Options</h2>
            <Input.Search
                size="large"
                placeholder="Ex: Wifi"
                className="mb-2"
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <OptionLists list={searchValue === "" ? list : tempList} onChange={setListById} />
        </div>
    );
}

export default SearchOption;