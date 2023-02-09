import { IPost } from "../model/IPost";

interface IPostItemProps {
    post: IPost
}

const PostItem: React.FC<IPostItemProps> = ({post}) => {
    return (
        <div className="post">
            {post.id}. {post.title}
            <button>Delete</button>
        </div>
    )
}

export default PostItem;