import { useMemo, useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { Posts } from "./Posts"
import { Pagination } from './Pagination'
import { BiSearchAlt } from 'react-icons/bi'
import { Header } from './Header'

export const Body = () => {
    const [posts, setPosts] = useState<any[]>([])
    const [list, setList] = useState<any[]>([])
    const [pagination, setPagination] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const [search, setSearch] = useState('')

    const handlePosts = useCallback((page = 1) => {
        axios.get(
            `https://gorest.co.in/public/v2/posts?page=${page}&per_page=10`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(result => {
                setList(result.data)
                setPagination(parseInt(result.headers['x-pagination-pages'] || '0'))
            })
    }, [])

    useMemo(handlePosts, [handlePosts])

    useEffect(() => {
        list.length &&
            setPosts(list)
    }, [list])

    const handlePage = (page: number) => {
        setCurrentPage(page)
        handlePosts(page)
    }

    useEffect(() => {
        search ?
            setPosts(list.filter((items) => items.title.includes(search)))
            :
            setPosts(list)
    }, [search, list])

    const reload = () => {
        handlePosts()
    }

    return (
        <div className='w-full'>
            <Header reload={reload} />
            <div className="text-black dark:text-white w-full max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold tracking-wider capitalize text-center my-4">posts</h2>
                <div className="p-4">
                    <div className='flex justify-center'>
                        <div className='flex items-center gap-2 bg-white py-2 px-4 rounded-full text-black'>
                            <input type="text" placeholder='Search' onChange={e => setSearch(e.target.value)} value={search} className='outline-none border-0' />
                            <button><BiSearchAlt /></button>
                        </div>
                    </div>
                    <p className='my-2 capitalize text-right'>page {currentPage}/{pagination}</p>
                    <div>
                        <Posts posts={posts} reload={reload} />
                        {
                            pagination &&
                            <Pagination pagination={pagination} currentPage={currentPage} handlePage={handlePage} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
