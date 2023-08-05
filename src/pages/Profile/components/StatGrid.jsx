function StatGrid() {
  const values = [
    { src: "icon.jpg", count: 1800, text: "Reservations", color: "text-red-600" },
    { src: "icon.jpg", count: 2500, text: "Visiteurs", color: "text-green-600" },
    { src: "icon.jpg", count: 350, text: "Visiteurs", color: "text-yellow-600" },
    { src: "icon.jpg", count: 2500, text: "Visiteurs", color: "text-green-600" },
  ]

  return (
    <div className='flex gap-4 w-full ' >
      {
        values.map((el, index) => {
          return (
            <div className='bg-white shadow-md rounded-lg p-4 flex-1 border-gray-200 flex itemes-center' key={index}>
              <div className={`flex flex-row gap-5 ${el.color}`}>
                <img src={el.src} alt="" className="w-10 h-10" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold">+{el.count}</span>
                  <span>{el.text}</span>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default StatGrid