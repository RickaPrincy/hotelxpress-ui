import { Button } from "antd";
import "./Search.css"
import { GiftFilled } from "@ant-design/icons";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchOption from "./SearchOption";

function Search() {
    return (
        <div className="w-full pt-5 mt-5">
            <div className="w-full bg-blue-100 gap-5 d-c-c p-4">
                <GiftFilled className="text-blue-800 text-4xl m-0 p-0" />
                <h2 className="text-center pt-2 text-[16px]"><span className="font-bold">Destination Vietnam !</span> Veuillez lire les exigences de voyage actuelles avant de réserver.</h2>
                <Button className="mt-2 h-[auto]">Lire plus</Button>
            </div>
            <div className="bg-orange-700 p-4 w-full">
                <SearchBar />
            </div>
            <SearchOption />
        </div>
    );
}

export default Search;