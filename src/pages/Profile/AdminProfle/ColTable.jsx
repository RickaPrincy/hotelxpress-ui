function ColTable({ element }) {
    const getElement = () => {
        const current = new Date().toISOString();

        if (element.arrival > current)
            return <p className="text-orange-500 font-bold">Bientôt</p>
        if (element.departure < current)
            return <p className="text-red-500 font-bold">Fini</p>
        return <p className="text-green-500 font-bold">En Cours</p>
    }

    return (
        <tr className="hover:bg-neutral-200 text-start p-4 duration-500">
            <td className="p-2">{element.user.first_name}</td>
            <td className="p-2">{element.date_reservation.slice(0, element.date_reservation.indexOf("T"))}</td>
            <td className="p-2">{element.departure.slice(0, element.departure.indexOf("T"))}</td>
            <td className="p-2">{element.arrival.slice(0, element.arrival.indexOf("T"))}</td>
            <td className="p-2">{getElement()}</td>
        </tr>
    );
}

export default ColTable;