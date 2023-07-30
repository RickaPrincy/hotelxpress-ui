import { Form, Checkbox } from "antd";

function Option({ id_room_content, content_name, checked }) {
    return (
        <div className="flex items-center justify-start gap-3">
            <Form.Item name={content_name} valuePropName="checked" className="m-0">
                <Checkbox id={id_room_content} name={content_name} defaultChecked={checked} className="m-0 p-0"/>
            </Form.Item>
            <label htmlFor={id_room_content} className="cursor-pointer">
                {content_name[0].toUpperCase() + content_name.slice(1)}
            </label>
        </div>
    );
}

export default Option;