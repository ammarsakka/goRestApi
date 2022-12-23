import { Post } from './Post'

interface porps {
    posts: never[]
}

export const Posts = ({ posts }: porps) => {

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
