import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import Energy from "../../components/energy";
import Pie from "../../components/chart/pie";
import BuildingImg from "../../public/building.png"
import Image from "next/image";

export default function Building() {
    return (
        <>
            {/* Header */}
            <Header />

            <div className="flex">
                <Sidebar />
                <div className="w-full">
                    <div className="bg-white rounded-lg my-3 p-3">
                        <Image className='w-full mx-auto rounded-lg' src={BuildingImg} priority />
                    </div>
                    <div className="grid grid-cols-2 my-3">
                        <div className="px-3 bg-white mr-3 rounded-lg">
                            <p className='text-center p-3'>Energy</p>
                            <Energy title='ตึก 30 ปี' value='0'></Energy>
                            <Energy title='ตึก 30 ปี' value='0'></Energy>
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