import { Post } from './Post'

interface props {
    posts: any[],
}

export const Posts = ({ posts }: props) => {

    return (
        <div className='grid grid-cols-1 gap-2'>
            {
                posts &&
                posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))
            }
        </div>
    )
}
