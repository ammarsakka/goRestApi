import { Post } from './Post'

interface props {
    posts: any[],
    reload: any
}

export const Posts = ({ posts, reload }: props) => {

    return (
        <div className='grid grid-cols-1 gap-2'>
            {
                posts &&
                posts.map((post, index) => (
                    <Post key={index} post={post} reload={reload} />
                ))
            }
        </div>
    )
}
