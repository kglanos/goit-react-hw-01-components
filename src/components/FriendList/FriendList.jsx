import css from './FriendList.module.css';

export function FriendListItem({ friend }) {
    const { id, avatar, isOnline, name } = friend;
    return (
    <li className={css.item} key={id}>
        <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
        />

        <img className={css.userIcon} src={avatar} alt="User avatar" width="48" />
        <p className={css.userName}>{name}</p>
    </li>
    );
}

export function FriendList({ friends }) {
    return (
    <ul className={css.friendList}>
        {friends.map(item => {
        return <FriendListItem friend={item} key={item.id} />;
        })}
    </ul>
    );
}