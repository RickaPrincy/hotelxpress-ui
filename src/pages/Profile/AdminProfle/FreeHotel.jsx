function FreeHotel() {
  const values = [
    { name:"HotelSky"},
    { name:"HotelBeach"},
    { name:"HotelCity"},
    { name:"HotelDreams"},
    { name:"HotelSky"},
    { name:"HotelSky"},
  ]
  return (
    <div className="bg-white shadow-md w-1/3 p-4 mt-5 h-96 overflow-hidden overflow-y-scroll ">
      <h1 className="font-bold text-2xl p-2 mb-4">Free Hotel</h1>
      {
      values.map((el, index) =>{
        return (
          <div className="bg-slate-200 border-l-8 border-red-600 rounded-md p-4 mb-4 flex gap-24" key={index}>
            {el.name}
          </div>
        )
      })
      }
    </div>
  )
}

export default FreeHotel