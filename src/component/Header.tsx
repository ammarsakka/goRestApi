import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useState } from 'react'
import { New } from './New'

export const Header = ({ reload }: any) => {
    const [open, setOpen] = useState(false)

    return (
        <header className='w-full text-black dark:text-white'>
            <div className='flex justify-between items-center py-4 px-8 '>
                <p className='text-lg font-bold capitalize tracking-wider'>go rest</p>
                <nav>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <button className='p-2 hover:bg-gray-700 rounded-full cursor-pointer text-orange-500 text-lg'>
                                <BsFillSunFill />
                            </button>
                        </li>
                        <li>
                            <button className='p-2 bg-green-500 rounded capitalize tracking-wider cursor-pointer hover:bg-green-600' onClick={() => { setOpen(true) }}>create post</button>
                        </li>
                    </ul>
                </nav>
            </div>
            <New open={open} setOpen={setOpen} reload={reload} />
        </header>
    )
}
