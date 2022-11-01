import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import BarChart from "../../components/chart/bar";

export default function Energy() {
    return (
        <>
            {/* Header */}
            <Header />

            <div className="flex">
                <Sidebar />
                <div className="w-full m-3">
                    <div className='p-3 bg-white rounded-lg'>
                        <p className='text-center text-gray-900'>รายวัน</p>
                        <BarChart label='00.00, 01.00, 02.00, 03.00, 04.00, 05.00, 06.00, 07.00, 08.00, 09.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00, 23.00' dataenergy='1,2,7,5,9,0,2,5,1,28,7,0,1,2,5,0,10,8,1,2,4,0,1,1' datasolar='24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1' />
                    </div>
                    <div className='p-3 mt-3 bg-white rounded-lg'>
                        <p className='text-center text-gray-900'>รายสัปดาห์</p>
                        <BarChart label='Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday' dataenergy='7,21,4,5,2,5,9' datasolar='7,6,5,4,3,2,1' />
                    </div>
                    <div className='p-3 mt-3 bg-white rounded-lg'>
                        <p className='text-center text-gray-900'>รายเดือน</p>
                        <BarChart label='Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec' dataenergy='6,8,20,19,5,38,1,3,6,58,9,1' datasolar='2,1,10,9,8,7,6,5,4,3,2,10' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}