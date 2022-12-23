import { useMemo, useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { Posts } from "./Posts"
import { Pagination } from './Pagination'

export const Body = () => {
    const [posts, setPosts] = useState([])
    const [list, setList] = useState([])
    const [pagination, setPagination] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const handlePosts = useCallback((page = 1) => {
        axios.get(
            `https://gorest.co.in/public/v2/posts?page=${page}&per_page=5`,
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

    useMemo(handlePosts, [])

    useEffect(() => {
        list.length &&
            setPosts(list)
    }, [list])

    const handlePage = (page: number) => {
        setCurrentPage(page)
        handlePosts(page)
    }

    return (
        <div className="text-black dark:text-white w-full max-w-7xl">
            <h2 className="text-4xl font-bold tracking-wider capitalize text-center my-4">posts</h2>
            <div className="p-4">
                <p className='my-2 capitalize text-right'>page {currentPage}/{pagination}</p>
                <div>
                    <Posts posts={posts} />
                    {
                        pagination &&
                        <Pagination pagination={pagination} currentPage={currentPage} handlePage={handlePage} />
                    }
                </div>
            </div>
        </div>
    )
}
