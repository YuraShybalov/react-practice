import React from 'react';
import css from 'components/Profile/prfile.module.css';
import user from 'files/user.json';

const Profile = () => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={user.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>@{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>
      <ul class={css.stats}>
        <li className={css.item}>
          <span className="label">Followers</span>
          <span>{user.stats.followers}</span>
        </li>
        <li className={css.item}>
          <span class="label">Views</span>
          <span>2000</span>
        </li>
        <li className={css.item}>
          <span class="label">Likes</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
