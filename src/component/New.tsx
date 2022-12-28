import { useState } from 'react'
import axios from 'axios'
import { Module } from './Module'

interface props {
    open: boolean,
    setOpen: any,
    reload: any
}

export const New = ({ open, setOpen, reload }: props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleAdd = () => {
        axios.post(
            `https://gorest.co.in/public/v2/users/5220/posts`,
            {
                title: title,
                body: body.slice(0, 500)
            },
            {
                headers: {
                    "Accept": "application/json",
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
                <p className='capitalize tracking-wider text-lg font-semibold pb-4 border-b-2'>new post</p>
                <div className='mt-4'>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <label htmlFor="title" className='capitalize tracking-wider text-lg'>title</label>
                            <input type="text" className='bg-transparent p-2' name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder='Post Title' />
                        </div>
                        <div className='grid gap-2'>
                            <label htmlFor="body" className='capitalize tracking-wider text-lg'>body</label>
                            <textarea name='body' className='bg-transparent p-2 resize-none' rows={10} onChange={e => setBody(e.target.value)} value={body} placeholder='Post Body' maxLength={500}></textarea>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-4'>
                        <button className="w-full py-2 px-4 uppercase bg-green-500 rounded cursor-pointer hover:bg-green-600" onClick={handleAdd}>save</button>
                        <button className="w-full py-2 px-4 uppercase  bg-slate-500 rounded cursor-pointer hover:bg-slate-600" onClick={() => { setOpen(false) }}>cancel</button>
                    </div>
                </div>
            </div>
        </Module >
    )
}
