import { Input } from "antd";

function Information({ type = ["text", "text"], name , defaultValue}) {
    return (
        <div className="flex w-full justify-between mb-4">
            <Input type={type[0]} name={name[0]} defaultValue={defaultValue[0]} className="w-[48%] m-0" placeholder={name[0][0].toUpperCase() + name[0].slice(1)} />
            <Input type={type[1]} name={name[1]} defaultValue={defaultValue[1]} className="w-[48%] m-0" placeholder={name[1][0].toUpperCase() + name[1].slice(1)} />
        </div>
    );
}

export default Information;