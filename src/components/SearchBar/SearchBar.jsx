import { Button, DatePicker, Form, Select } from "antd";

function SearchBar({ onSubmit }) {
    const options = [
        {
            value: "ricka",
            label: "ricka"
        },
        {
            value: "test",
            label: "test"
        }
    ]

    return (
        <Form className="w-full d-c-c gap-5 m-0 pt-0" onFinish={onSubmit}>
            <Form.Item className="w-[250px] m-0" name="location">
                <Select placeholder="Location" size="large" options={options} />
            </Form.Item>
            <Form.Item name="interval" className="m-0">
                <DatePicker.RangePicker size="large" />
            </Form.Item>
            <Form.Item className="w-[250px] m-0" name="room_type">
                <Select placeholder="Room Type" size="large" options={options} />
            </Form.Item>
            <Form.Item className="m-0">
                <Button type="primary" htmlType="submit" className="px-5 h-auto text-[18px] bg-blue-500">C'est Parti</Button>
            </Form.Item>
        </Form>
    );
}

export default SearchBar;