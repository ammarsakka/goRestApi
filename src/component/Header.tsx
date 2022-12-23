import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

export const Header = () => {
    return (
        <header className='w-full'>
            <div className='flex justify-between items-center py-4 px-8 text-black dark:text-white'>
                <p className='text-lg font-bold capitalize tracking-wider'>go rest</p>
                <nav>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <button className='p-2 hover:bg-gray-700 rounded-full cursor-pointer text-orange-500 text-lg'>
                                <BsFillSunFill />
                            </button>
                        </li>
                        <li>
                            <a href="/"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
