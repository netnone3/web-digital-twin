import Link from 'next/link'
import Image from 'next/image'
import MenuImg from '../public/menu.svg'

export default function header() {
    return (
        <nav className="bg-white p-3">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href='/' className='text-gray-900'>Logo</Link>
                <Link href='/building' className='text-gray-900'><Image className='text-gray-900' src={MenuImg} width={30}/></Link>
            </div>
        </nav>
    )
}
