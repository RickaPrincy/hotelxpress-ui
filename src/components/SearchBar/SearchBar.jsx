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

    const onSubmit = (values) => {
        search.onChange(values);
        navigate("/search")
    }

    useEffect(() => {
        axios.get("http://localhost:5000/search")
            .then(response => setSearchList({
                locations: response.data.locations,
                room_types: response.data.room_types
            }))
            .catch(error => console.log(error));
    }, []);

    return (
        <Form className="w-full d-c-c gap-5 m-0 pt-0" initialValues={search} onFinish={onSubmit}>
            <Form.Item className="w-[250px] m-0" name="location" >
                <Select
                    placeholder="Location"
                    size="large"
                    options={[{ value: "", label: "Tous"},...searchList.locations.map(el => {
                        return { value: el.state, label: el.state }
                    })]}
                />
            </Form.Item>
            <Form.Item name="interval" className="m-0">
                <DatePicker.RangePicker size="large" />
            </Form.Item>
            <Form.Item className="w-[250px] m-0" name="room_type">
                <Select
                    placeholder="Room Type"
                    size="large"
                    options={[{value: 0, label: "Tous"},...searchList.room_types.map(el => {
                        return { value: el.id_room_type, label: el.type }
                    })]}
                />
            </Form.Item>
            <Form.Item className="m-0">
                <Button type="primary" htmlType="submit" className="px-5 h-auto text-[18px] bg-blue-500">C'est Parti</Button>
            </Form.Item>
        </Form>
    );
}

export default SearchBar;