function CountInfo({ value, text, color }) {
    return (
        <div className={`flex flex-col m-0 items-center ${color}`}>
            <div className="flex text-[25px] font-bold items-center ">
                <h2 className="m-0">+ {value}</h2>
            </div>
            <h2 className="font-bold ms-5 mt-0 text-[20px] text-center">{text}</h2>
        </div>
    );
}

export default CountInfo;