import axios from 'axios'
import React from 'react'
import { Module } from './Module'

interface props {
    post: {
        id: number,
        user_id: number,
        title: string,
        body: string
    },
    open: boolean,
    setOpen: any,
    reload: any
}

export const Delete = ({ post, open, setOpen, reload }: props) => {

    const handleDelete = () => {
        axios.delete(
            `https://gorest.co.in/public/v2/posts/${post.id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_GO_REST_API}`
                }
            }
        ).then((result) => {
            reload()
            setOpen(false)
        })
    }

    return (
        <Module open={open}>
            <div>
                <p className='capitalize tracking-wider text-lg font-semibold pb-4 border-b-2'>delete</p>
                <div className='mt-4'>
                    <p className='text-center leading-7'>Are you sure you want to delete <span className='font-bold'>{post.title}</span>?</p>
                    <div className='flex items-center gap-2 mt-4'>
                        <button className="w-full py-2 px-4 uppercase bg-red-500 rounded cursor-pointer hover:bg-red-600" onClick={handleDelete}>delete</button>
                        <button className="w-full py-2 px-4 uppercase  bg-slate-500 rounded cursor-pointer hover:bg-slate-600" onClick={() => { setOpen(false) }}>cancel</button>
                    </div>
                </div>
            </div>
        </Module>
    )
}
