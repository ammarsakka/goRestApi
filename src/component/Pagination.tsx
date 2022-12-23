import { useState, useEffect } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface props {
    pagination: number,
    currentPage: number,
    handlePage: any
}

export const Pagination = ({ pagination, currentPage, handlePage }: props) => {
    const [pages, setPages] = useState<number[]>([])

    useEffect(() => {
        const pageNumbers = []
        for (let index = 1; index <= pagination; index++) {
            pageNumbers.push(index)
        }
        setPages(pageNumbers)
    }, [pagination])

    return (
        <div className='my-4'>
            <ul className='flex items-center gap-2'>
                {
                    currentPage > 1 &&
                    <li>
                        <button
                            onClick={() => { handlePage(currentPage - 1) }}
                            className='p-3 text-lg hover:bg-gray-700 w-10 h-10 flex justify-center items-center rounded-full'
                        >
                            <BsChevronLeft />
                        </button>
                    </li>
                }
                {
                    currentPage > 1 &&
                    <li>
                        <button
                            onClick={() => { handlePage(1) }}
                            className='p-4 text-lg hover:bg-gray-700 w-10 h-10 flex justify-center items-center rounded-full'
                        >
                            1
                        </button>
                    </li>
                }
                {
                    currentPage > 2 &&
                    <li>
                        <span
                            className='p-4 text-lg w-10 h-10 flex justify-center items-center rounded-full'
                        >
                            ...
                        </span>
                    </li>
                }
                {
                    pages &&
                    pages.map((page, i) => {
                        if (page < currentPage) return

                        if (page > (currentPage + 4)) return

                        return (
                            <li key={i}>
                                <button
                                    onClick={() => { handlePage(page) }}
                                    className={`p-4 text-lg hover:bg-gray-700 w-10 h-10 flex justify-center items-center rounded-full ${currentPage === page ? 'bg-gray-700' : 'bg-transparent'}`}
                                >
                                    {page}
                                </button>
                            </li>
                        )
                    })
                }
                {
                    currentPage < (pagination - 4) &&
                    <li>
                        <span
                            className='p-4 text-lg w-10 h-10 flex justify-center items-center rounded-full'
                        >
                            ...
                        </span>
                    </li>
                }
                {
                    currentPage < pagination &&
                    <li>
                        <button
                            onClick={() => { handlePage(pagination) }}
                            className='p-4 text-lg hover:bg-gray-700 w-10 h-10 flex justify-center items-center rounded-full'
                        >
                            {pagination}
                        </button>
                    </li>
                }
                {
                    currentPage < (pagination - 1) &&
                    <li>
                        <button
                            onClick={() => { handlePage(currentPage + 1) }}
                            className='p-3 text-lg hover:bg-gray-700 w-10 h-10 flex justify-center items-center rounded-full'
                        >
                            <BsChevronRight />
                        </button>
                    </li>
                }
            </ul>
        </div>
    )
}
