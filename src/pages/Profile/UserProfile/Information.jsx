import { Input, Form } from "antd";

function Information({ type = ["text","text"], name }) {
    return (
        <div className="flex w-full justify-between mb-4">
            <Form.Item name={name[0]} className="w-[48%] m-0">
                <Input type={type[0]} placeholder={name[0][0].toUpperCase()+ name[0].slice(1)}/>
            </Form.Item>
            <Form.Item name={name[1]} className="w-[48%] m-0">
                <Input type={type[1]} placeholder={name[1][0].toUpperCase()+ name[1].slice(1)} />
            </Form.Item>
        </div>
    );
}

export default Information;