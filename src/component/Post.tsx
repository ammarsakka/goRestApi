
interface props {
    post: {
        id: number,
        user_id: number,
        title: string,
        body: string
    }
}

export const Post = ({ post }: props) => {
    return (
        <div className='shadow p-2 rounded border'>
            <h2 className="text-2xl font-semibold tracking-wider mb-4 pb-4 border-b-2">
                {post.title}
            </h2>
            <p className="tracking-wider">
                {post.body}
            </p>
        </div>
    )
}
