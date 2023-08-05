function AddRoom() {
  return (
    <div className="bg-white shadow-md w-1/2 p-8 mt-5 mx-auto rounded-lg">
        <span className="flex justify-center p-4 font-bold text-2xl">Add Room</span>
            <div className="flex flex-col gap-6 justify-center items-center">
                <div className="flex flex-row">
                    <form className="flex flex-col text-sm gap-6 justify-center items-center">
                        <input type="text" placeholder="room_name" className=' outline-none w-2/3 p-4 border-b-2 border-orange-600'/>
                        <input type="text" placeholder='category' className=' outline-none w-2/3 p-4 border-b-2 border-orange-600'/>
                        <input type="number" placeholder='price_night' className=' outline-none w-2/3 p-4 border-b-2 border-orange-600' />
                        <input type="number" placeholder='price_hours' className=' outline-none w-2/3 p-4 border-b-2 border-orange-600'/>
                    </form>
                    <div className="flex text-sm gap-6 justify-center items-center">
                        <input type="text" placeholder='description' className=' outline-none w-2/ h-40 p-4 border-b-2 border-orange-600'/>
                    </div>
                </div>
                <button className="bg-orange-400 rounded-lg text-white shadow-md p-4 w-1/2 flex">Put</button>
            </div>
    </div>
  )
}

export default AddRoom