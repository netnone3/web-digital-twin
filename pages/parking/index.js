import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import Image from "next/image";
import ParkingImg from "../../public/parking.png"

export default function Parking() {
    return (
        <>
            {/* Header */}
            <Header />

            <div className="flex">
                <Sidebar />
                <div className="w-full m-3 bg-white rounded-lg p-3">
                    <Image className='w-full mx-auto rounded-lg' src={ParkingImg} priority />
                </div>
            </div>
            <Footer />
        </>
    )
}