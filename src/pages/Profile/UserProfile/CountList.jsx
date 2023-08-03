import CountInfo from "./CountInfo.jsx";

function CountList() {
    const list = [
        {id: 1,value: 300, text: "Reservation", color: "text-orange-500"},
        {id: 2,value: 400, text: "NodeModule", color: "text-green-800"},
        {id: 3,value: 500, text: "Lolita", color: "text-blue-800"},
        {id: 4,value: 400, text: "NodeModule", color: "text-yellow-800"}
    ];

    return (
        <div className="flex items-center px-[100px] justify-between w-full mt-4">
            {list.map(el=><CountInfo key={el.id} {...el}/>)}
        </div>
    );
}

export default CountList;