import { useState } from 'react'
import { Delete } from "./Delete"

interface props {
    post: {
        id: number,
        user_id: number,
        title: string,
        body: string
    },
    reload: any
}

export const Post = ({ post, reload }: props) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='shadow p-2 rounded border'>
            <h2 className="text-2xl font-semibold tracking-wider mb-4 pb-4 border-b-2">
                {post.title}
            </h2>
            <p className="tracking-wider">
                {post.body}
            </p>
            <div className="mt-4 mb-2 flex items-center gap-4">
                <button className="py-2 px-4 uppercase bg-green-500 rounded cursor-pointer hover:bg-green-600">edit</button>
                <button className="py-2 px-4 uppercase bg-red-500 rounded cursor-pointer hover:bg-red-600" onClick={() => { setOpen(true) }}>delete</button>
            </div>
            <Delete post={post} open={open} setOpen={setOpen} reload={reload} />
        </div>
    )
}
