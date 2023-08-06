function AddHotels() {
    return (
        <div className="bg-white shadow-md w-1/2 p-8 mt-2 mx-auto rounded-lg">
            <span className="flex justify-center p-4 font-bold text-2xl">Ajouter Hotel</span>
            <div className="flex flex-col gap-6 justify-center items-center">
                <div className="flex flex-row">
                    <form className="flex flex-col text-sm gap-6 justify-center items-center">
                        <input type="text" placeholder="Nom" className=' outline-none w-2/3 p-4 border-b-2 border-orange-600' />
                        <input type="text" placeholder='Pays' className=' outline-none w-2/3 p-4 border-b-2 border-orange-600' />
                        <input type="text" placeholder='Ville' className=' outline-none w-2/3 p-4 border-b-2 border-orange-600' />
                    </form>
                    <div className="flex flex-col text-sm gap-6 justify-center items-center">
                        <input type="text" placeholder='Address' className=' outline-none w-2/3 p-4 border-b-2 border-orange-600' />
                        <input type="number" placeholder='Telephone' className=' outline-none w-2/3 p-4 border-b-2 border-orange-600' />
                    </div>
                </div>
                <button className="bg-green-500 flex justify-center rounded-lg text-white shadow-md p-4 w-1/3 mt-4 flex">Ajouter</button>
            </div>
        </div>
    )
}

export default AddHotels;