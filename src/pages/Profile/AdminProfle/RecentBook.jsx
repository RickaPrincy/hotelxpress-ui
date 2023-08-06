function RecentBook() {
  const values = [
    { UserName: "John", DateR: "10:05:23", HotelType: "HotelBeach", RoomType: "Famille" },
    { UserName: "John", DateR: "10:05:23", HotelType: "HotelBeach", RoomType: "Famille" },
    { UserName: "John", DateR: "10:05:23", HotelType: "HotelBeach", RoomType: "Famille" },
    { UserName: "John", DateR: "10:05:23", HotelType: "HotelBeach", RoomType: "Famille" },
    { UserName: "John", DateR: "10:05:23", HotelType: "HotelBeach", RoomType: "Famille" },
  ]
  return (
    <div className="bg-white shadow-md w-2/3 p-4 mt-5 h-96 overflow-hidden overflow-y-scroll ">
      <h1 className="font-bold text-2xl p-2">Réservation récente</h1>
      <div className="font-bold border-b-2 p-4 flex gap-24">
        <span>Utilisateur</span>
        <span>Date</span>
        <span>Hotel</span>
        <span>Type chambre</span>
      </div>
      {
        values.map((el, index) => {
          return (
            <div className="p-4 flex gap-24 hover:bg-neutral-200" key={index}>
              <span>{el.UserName}</span>
              <span>{el.DateR}</span>
              <span>{el.HotelType}</span>
              <span>{el.RoomType}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default RecentBook