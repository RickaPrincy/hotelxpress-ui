import { Button, DatePicker, Form, Select } from "antd";
import { SearchFilter } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const navigate = useNavigate();
    const search = useContext(SearchFilter);

    const onSubmit = (values) => {
        search.onChange(values);
        navigate("/search");
    };

    const options = [
        {
            value: "ricka",
            label: "ricka"
        },
        {
            value: "test",
            label: "test"
        }
    ];

    return (
        <Form className="w-full d-c-c gap-5" initialValues={search} onFinish={onSubmit}>
            <Form.Item className="w-[250px] m-0" name="location">
                <Select placeholder="Location" defaultValue="" size="large" options={options} />
            </Form.Item>
            <Form.Item name="interval" className="m-0">
                <DatePicker.RangePicker size="large" />
            </Form.Item>
            <Form.Item className="w-[250px] m-0" name="room_type">
                <Select placeholder="Room Type" size="large" options={options} />
            </Form.Item>
            <Form.Item className="m-0">
                <Button type="primary" htmlType="submit" className="px-5 h-auto text-[18px] bg-blue-500">C est Parti</Button>
            </Form.Item>
        </Form>
    );
}

export default SearchBar;