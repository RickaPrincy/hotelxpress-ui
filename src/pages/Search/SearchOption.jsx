import { Form, Input } from "antd";
import Option from "./Option";
import useChangeId from "../../hooks/useChangeId";

function SearchOption() {
    const [ list , onChange ] = useChangeId("checked",[
        {
            id: 1,
            name: "wifi",
            checked: false
        },
        {
            id: 2,
            name: "douche",
            checked:true 
        }
    ]);

    return (
        <div className="w-[250px] p-5">
            <h2 className="font-bold text-center mb-5 text-[18px]">Search Options</h2>
            <Input.Search
                size="large"
                placeholder="Ex: Wifi"
                className="mb-2"
                onChange={()=>console.log(list)}
            />
            <Form onChange={(e) => onChange( +e.target.id, e.target.checked )} className="h-full w-full position-fixed">
                {list.map(el => {
                    return <Option key={el.id} el={el} />
                })}
            </Form>
        </div >
    );
}

export default SearchOption;