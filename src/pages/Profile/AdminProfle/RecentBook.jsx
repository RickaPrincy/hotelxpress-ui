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
      <h1 className="font-bold text-2xl p-2">Recent Booking</h1>
      <div className="font-bold border-b-2 p-4 flex gap-24">
        <span>User</span>
        <span>Date_book</span>
        <span>Hotel</span>
        <span>Room_type</span>
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