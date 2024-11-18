import React from 'react';
import css from 'components/FriendList/friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul class={css.friendList}>
        {friends.map(friend => (
          <li className={css.item }>
            <span
              className={friend.isOnline ? css.status__true : css.status__false}
            ></span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
