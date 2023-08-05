import StatGrid from '../components/StatGrid'
import RecentBook from './RecentBook'
import FreeHotel from './FreeHotel'

function AdminProfile() {
    return (
        <div className='flex-6 text-[14px]'>
         <StatGrid />
            <div className="flex gap-4">
                <RecentBook />
                <FreeHotel />
            </div>
        </div>
    )
}

export default AdminProfile