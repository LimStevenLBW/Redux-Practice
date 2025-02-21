import { useSelector } from 'react-redux';
import { selectAllUsers, User } from '../users/usersSlice';

interface PostAuthorProps {
    userId: string
}

const PostAuthor = ({ userId }: PostAuthorProps) => {
    const users: any = useSelector(selectAllUsers);

    const author = users.find((user: User) => user.id === userId);

    return (
        <span>
            {author ? author.name : "Unknown Author"}
        </span>);
}

export default PostAuthor;