import { useSelector } from "react-redux";
import { selectAllPosts, Post } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
    //if the shape of the state changes,
    //we only need to change the selector
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map((post: Post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
            </p>
        </article>
    ))
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>);
}

export default PostsList;