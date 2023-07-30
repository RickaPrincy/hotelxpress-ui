import { Form, Checkbox } from "antd";

function Option({ el }) {
    return (
        <div className="flex items-center justify-start gap-3">
            <Form.Item name={el.name} valuePropName="checked" className="m-0">
                <Checkbox id={el.id} name={el.name} defaultChecked={el.checked} className="m-0 p-0"/>
            </Form.Item>
            <label htmlFor={el.id} className="cursor-pointer">{el.name[0].toUpperCase() + el.name.slice(1)}</label>
        </div>
    );
}

export default Option;