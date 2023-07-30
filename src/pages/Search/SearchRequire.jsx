import { useContext } from "react";
import { SearchFilter } from "../../App";
import { Navigate } from "react-router-dom";
import Search from "./Search";

function SearchRequire() {
    const search = useContext(SearchFilter);

    return (
        <>
            {!search.isNull() ? <Search /> : <Navigate to={"/"} />}
        </>
    );
}

export default SearchRequire;