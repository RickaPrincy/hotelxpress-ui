function AddRoom() {
    return (
        <div className="bg-white shadow-md w-1/2 p-8 mt-2 mx-auto rounded-lg">
            <span className="flex justify-center p-4 font-bold text-2xl">Ajouter Chambre</span>
            <hr className="p-4" />
            <div className="flex flex-col gap-6 justify-center items-center">
                <div className="flex flex-row">
                    <form className="flex flex-col text-sm gap-6 justify-center items-center">
                        <input type="text" placeholder="Nom" className=' outline-none w-2/3 p-2 hover:border-orange-600 border-2 rounded-lg' />
                        <input type="text" placeholder='Categories' className=' outline-none w-2/3 p-2 hover:border-orange-600 border-2 rounded-lg' />
                        <input type="number" placeholder='Prix nuit' className=' outline-none w-2/3 p-2 hover:border-orange-600 border-2 rounded-lg' />
                        <input type="number" placeholder='Prix heures' className=' outline-none w-2/3 p-2 hover:border-orange-600 border-2 rounded-lg' />
                    </form>
                    <div className="flex flex-col text-sm gap-6 justify-center items-center">
                        <input type="number" placeholder='Type de chambre' className=' outline-none w-2/ p-2 hover:border-orange-600 border-2 rounded-lg' />
                        <input type="number" placeholder='Hotel' className=' outline-none w-2/ p-2 hover:border-orange-600 border-2 rounded-lg' />
                        <input type="text" placeholder='Description' className=' outline-none w-2/ p-2 hover:border-orange-600 border-2 rounded-lg' />
                    </div>
                </div>
                <button className="bg-green-500 flex justify-center rounded-lg text-white shadow-md p-2 w-1/3 mt-4 flex">Ajouter</button>
            </div>
        </div>
    )
}

export default AddRoom