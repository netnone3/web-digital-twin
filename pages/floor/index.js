import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import Energy from "../../components/energy";
import Pie from "../../components/chart/pie";
import FloorImg from "../../public/floor.png"
import Image from "next/image";
import PM from "../../components/pm";

export default function Floor() {
    return (
        <>
            {/* Header */}
            <Header />

            <div className="flex">
                <Sidebar />
                <div className="w-full">
                    <div className="bg-white rounded-lg my-3 p-3">
                        <Image className='w-full mx-auto rounded-lg' src={FloorImg} priority />
                    </div>
                    <div className="grid mb-3">
                        <div className="px-3 bg-white rounded-lg">
                            <p className='text-center p-3'>PM2.5</p>
                            <PM title='810' value='10' />
                            <PM title='812' value='10' />
                            <PM title='818' value='10' />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 my-3">
                        <div className="px-3 bg-white mr-3 rounded-lg">
                            <p className='text-center p-3'>Energy</p>
                            <Energy title='ชั้น 1' value='0'></Energy>
                            <Energy title='ชั้น 2' value='0'></Energy>
                            <Energy title='ชั้น 3' value='0'></Energy>
                            <Energy title='ชั้น 4' value='0'></Energy>
                            <Energy title='ชั้น 5' value='0'></Energy>
                            <Energy title='ชั้น 6' value='0'></Energy>
                            <Energy title='ชั้น 7' value='0'></Energy>
                            <Energy title='ชั้น 8' value='0'></Energy>
                        </div>
                        <div className="px-3 bg-white ml-3 rounded-lg">
                            <p className='text-center p-3'>Scope</p>
                            <Pie label='1,2,3,4,5,6' data='6,5,4,3,2,1' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}