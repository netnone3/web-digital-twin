import Image from 'next/image'
import Energy from '../components/energy'
import Footer from '../components/footer'
import Header from '../components/header'
import PM from '../components/pm'
import Temperature from '../components/temperature'
import HomeImg from '../public/home.png'

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* 3D */}
      <div className='bg-white p-3 m-3 rounded-lg'>
        <Image className='w-full mx-auto rounded-lg' src={HomeImg} priority/>
      </div>

      {/* Content */}
      <div className='m-3'>
        <div className='grid grid-cols-3'>
          {/* Energy */}
          <div className='px-3 bg-white mr-3 rounded-lg'>
            <p className='text-center p-3'>Energy</p>
            <Energy title='ตึก 30 ปี' value='0'></Energy>
            <Energy title='ตึก 30 ปี' value='0'></Energy>
          </div>

          {/* PM2.5 */}
          <div className='px-3 bg-white rounded-lg'>
            <p className='text-center p-3'>PM2.5</p>
            <PM title='ตึก 30 ปี' value='0'></PM>
            <PM title='ตึก 30 ปี' value='0'></PM>
          </div>

          {/* Temperature */}
          <div className='px-3 bg-white ml-3 rounded-lg'>
            <p className='text-center p-3'>Temperature</p>
            <Temperature title='ตึก 30 ปี' value='0'></Temperature>
            <Temperature title='ตึก 30 ปี' value='0'></Temperature>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}