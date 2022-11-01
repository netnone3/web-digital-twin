import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar() {
    // Check path
    const router = useRouter()

    return (
        <aside className="m-3 w-64" aria-label="Sidebar">
            <div className="h-full overflow-y-auto py-4 px-3 bg-white rounded-lg">
                <ul className="space-y-2">
                    <li>
                        <Link href="/building" className={router.asPath == '/building' ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-200" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"} >
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className="ml-3">Building</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/energy" className={router.asPath == '/energy' ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-200" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"}>
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> */}
                            <span className="flex-1 ml-3 whitespace-nowrap">Energy</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/parking" className={router.asPath == '/parking' ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-200" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"}>
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> */}
                            <span className="flex-1 ml-3 whitespace-nowrap">Parking</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/floor" className={router.asPath == '/floor' ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-200" : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"}>
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> */}
                            <span className="flex-1 ml-3 whitespace-nowrap">Floor</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}