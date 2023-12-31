import { Button, DatePicker, Form, Select } from "antd";
import { SearchFilter } from "../../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchBar() {
    const navigate = useNavigate();
    const search = useContext(SearchFilter);
    const [searchList, setSearchList] = useState({
        locations: [],
        room_types: []
    });

    useEffect(() => {
        axios.get("http://localhost:5000/search")
            .then(response => setSearchList(response.data))
            .catch(error => console.log(error));
    }, []);

    const onSubmit = (values) => {
        search.onChange(values);
        navigate("/search");
    };

    return (
        <Form className="w-full d-c-c gap-2 p-2" initialValues={search} onFinish={onSubmit}>
            <Form.Item className="w-[250px] m-0" name="location">
                <Select
                    placeholder="Lieu"
                    size="large"
                    allowClear
                    options={[{ value: "", label: "Tous" }, ...searchList.locations.map(el => ({ value: el, label: el }))]}
                />
            </Form.Item>
            <Form.Item name="interval" className="m-0">
                <DatePicker.RangePicker size="large" />
            </Form.Item>
            <Form.Item className="w-[250px] m-0" name="room_type">
                <Select
                    placeholder="Type de Chambre"
                    size="large"
                    allowClear
                    options={[{ value: 0, label: "Tous" }, ...searchList.room_types.map(el => ({ value: el.id_room_type, label: el.type }))]}
                />
            </Form.Item>
            <Form.Item className="m-0">
                <Button type="primary" htmlType="submit" className="px-5 h-auto text-[18px] bg-blue-500">Rechercher</Button>
            </Form.Item>
        </Form>
    );
}

export default SearchBar;
