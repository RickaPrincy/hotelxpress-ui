import { Form } from "antd";
import Option from "./Option";

function OptionLists({ list, onChange }) {
    return (
        <>
            {list.length !== 0 ?
                <Form onChange={(e) => onChange(+e.target.id, e.target.checked)} className="h-full w-full position-fixed">
                    { list.map(el => <Option key={el.id_room_content} {...el} />) }
                </Form>
                : <h2 className="text-[15px] text-gray-400 ms-3">Cela n'existe pas</h2>
            }
        </>
    );
}

export default OptionLists;