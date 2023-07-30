import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
    return (
        <div className="w-full h-screen d-c-c flex-col">
            <div className="w-[90%] bg-orange-500 p-2">
                <SearchBar />
            </div>
        </div>
    );
}

export default Home;