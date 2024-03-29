import styles from './users.module.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : "https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"} alt="" />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => { props.unfollow(u.id) }}>
                Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => { props.follow(u.id) }}>
                Follow</button>}

          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;