function Footer() {
    return (
        <div className="w-full bg-gray-800 mt-6">
            <div className="flex flex-col">
                <h1 className="p-4 text-yellow-600 text-2xl flex justify-center">HotelXpress</h1>
                <div className="flex flex-row justify-center gap-96 pb-6">
                    <div className="flex flex-col">
                        <span className="font-bold text-white text-xl">Follow us</span>
                        <span className="text-gray-400">Sur nos differents plateforms</span>
                        <div className="flex flex-row gap-4 w-6 h-6">
                        <img src="Facebook.png" alt="" className=" flex rounded-lg"/>
                        <img src="google.png" alt="" className=" flex rounded-lg"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-white text-xl">Telephone</span>
                        <span className="text-gray-400">+2613433434</span>
                    </div>
                </div>
            </div>
            <div className="p-1 border-t">
                <span className="flex justify-center text-white text-sm">© 2023-HEI-WEBWIZARD</span>
            </div>
        </div>
    )
}

export default Footer;