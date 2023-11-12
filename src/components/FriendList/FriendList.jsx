import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendListItem({ friend }) {
    const { avatar, isOnline, name } = friend;
    return (
    <li className={css.item} >
        <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
        />
        <img className={css.userIcon} src={avatar} alt="User avatar" width="48" />
        <p className={css.userName}>{name}</p>
    </li>
    );
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export function FriendList({ friends }) {
    return (
    <ul className={css.friendList}>
        {friends.map(item => 
        <FriendListItem friend={item} key={item.id} />
        )}
    </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};
