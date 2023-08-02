function RoomNotFound() {
    return (  
        <div className="mx-auto m-0">
            <img src="/noRoom.png" alt="No room found" className="p-0 w-[150px] mx-auto h-[200px]" />
            <h2 className="text-center text-gray-600">Désolé, aucune chambre trouvée</h2>
        </div>
    );
}

export default RoomNotFound;